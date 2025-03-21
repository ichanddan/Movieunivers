import { Image } from "@heroui/image";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import ReactStars from "react-rating-stars-component";

export const Moviedetails = () => {
  const [url, setUrl] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
  });
  console.log(data.image)
  useEffect(() => {
    async function getData() {
      const _doc = doc(db, "movie", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      const { title } = _data.data();
      const newTitle = title.split(" ")[0];
      const url = await fetch(
        `https://movix-backend-kappa.vercel.app/hb/get?name=${newTitle}`
      );
      const data = await url.json();
      console.log(data);
      setUrl(data);
    }
    getData();
  }, [id]);
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4 h-4/5 p-5">
          <div className="md:flex-1 px-4">
            <div className="flex items-center justify-center">
              <img
                src={data?.image}
                width={250}
                height={250}
                alt="earburd"
                // className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {data?.title}
            </h1>
            <ReactStars half={true} size={20} value={4} edit={false} />
            <div className="flex mb-4">
              <div className="mr-4">
                <p className="font-bold text-gray-700 dark:text-gray-300 text-2xl">
                  {data?.year}
                </p>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-700 dark:text-gray-300">
                Description
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {data?.description}
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-700 dark:text-gray-300">
                Download Url 
              </p>
              {
                url.length > 0 &&
                url.map((item, index) => (
                  <div key={index}>
                    <a href={'https://mdrive.site/archives/'+item.id} className="text-red-500 py-5" target="_blank" rel="noopener noreferrer">
                      Download {item.name}
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
