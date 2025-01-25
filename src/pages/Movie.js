import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import ReactStars from "react-rating-stars-component";
import { movieRef } from "../firebase/firebase";
import { Puff } from "react-loader-spinner";
import { getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";
import { Link } from "react-router-dom";
import PageNation from "../components/PageNation";

export default function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8; // Number of movies per page
  const [totalMovies, setTotalMovies] = useState(0);
  const [lastVisible, setLastVisible] = useState(null); // Store the last document for pagination

  // Fetch total number of movies
  useEffect(() => {
    async function fetchTotalMovies() {
      try {
        const _data = await getDocs(movieRef);
        setTotalMovies(_data.size); // Firebase's collection size
      } catch (error) {
        console.error("Error fetching total movies:", error);
      }
    }
    fetchTotalMovies();
  }, []);

  // Fetch paginated data
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let movieQuery = query(
          movieRef,
          orderBy("title"), // Ensure the field exists in Firestore
          limit(moviesPerPage)
        );

        // If not on the first page, start after the last visible document
        if (currentPage > 1 && lastVisible) {
          movieQuery = query(movieQuery, startAfter(lastVisible));
        }

        const _data = await getDocs(movieQuery);
        const movies = [];
        _data.forEach((doc) => {
          movies.push({ ...doc.data(), id: doc.id });
        });

        setMovieData(movies);
        setLastVisible(_data.docs[_data.docs.length - 1]); // Update the last document
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-wrap gap-5 items-center justify-center my-10">
        {loading ? (
          <div className="flex items-center justify-center p-40">
            <Puff />
          </div>
        ) : (
          movieData.map((element, index) => (
            <Card
              key={index}
              className="w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-5"
            >
              <Link to={`/details/${element.id}`}>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    src={element.image}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h1 className="font-bold text-lg md:text-xl">{element.title}</h1>
                  <ReactStars
                    half={true}
                    size={20}
                    value={element.rating}
                    edit={false}
                  />
                  <p className="text-sm uppercase font-bold">{element.year}</p>
                </CardHeader>
              </Link>
            </Card>
          ))
        )}
      </div>
      <div className="flex justify-center items-center p-4">
        <PageNation
          currentPage={currentPage}
          total={Math.ceil(totalMovies / moviesPerPage)} // Total number of pages
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}
