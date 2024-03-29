import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";

export default function Movie() {
  const [movieData, setMoviedata] = useState([
    {
      title: "Avengers Endgame 4k",
      year: 2018,
      rating: 3,
      poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
    },
    {
      title: "Avengers Endgame 4k",
      year: 2018,
      rating: 4.5,
      poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
    },
  ]);
  return (
    <div className="md:flex flex-wrap items-center justify-center my-10 ">
      {movieData.map((element, index) => {
        return (
          <Card key={index} className="mt-5 mx-5 w-1/5">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={element.poster}
                width={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h1 className="font-bold text-large">{element.title}</h1>
              <ReactStars half={true} size={20} value={element.rating} edit={false}/>              
              <p className="text-tiny uppercase font-bold">{element.year}</p>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
