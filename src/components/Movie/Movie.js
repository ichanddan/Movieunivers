import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import ReactStars from "react-rating-stars-component";
import { movieRef } from "../../firebase/firebase";
import { Puff } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Movie() {
  const [movieData, setMoviedata] = useState([]);
  const [loding, setLoding] = useState();
  useEffect(() => {
    async function getData() {
      setLoding(true);
      const _data = await getDocs(movieRef);
      _data.forEach((doc) => {
        setMoviedata((pev) => [...pev, {...(doc.data()),id: doc.id}]);
      });
      setLoding(false);
    }
    getData();
  }, []);
  return (
    <div
      className="md:flex flex-wrap items-center justify-center my-10 "
      id="m"
    >
      {loding === true ? (
        <div className="flex items-center justify-center p-40">
          <Puff />
        </div>
      ) : (
        movieData.map((element, index) => {
          return (
            <Card key={index} className="mt-5 mx-5 w-1/5" id="card">
              <Link to={`/details/${element.id}`}>
              <CardBody className="overflow-visible py-2" id="card1">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl h-72"
                  src={element.image}
                  width={270}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h1 className="font-bold text-large">{element.title}</h1>
                <ReactStars
                  half={true}
                  size={20}
                  value={element.rating}
                  edit={false}
                />
                <p className="text-tiny uppercase font-bold">{element.year}</p>
              </CardHeader>
            </Link>
            </Card>
          );
        })
      )}
    </div>
  );
}
