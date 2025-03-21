import React, { useState } from "react";
import { Puff } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import swel from "sweetalert";
import { movieRef } from "../firebase/firebase";
import { useNavigate } from "react-router";

export const AddMovie = () => {
  const navigate = useNavigate();
  const [dataStore, setDatastore] = useState({
    title: "",
    image: "",
    year: Number,
    description: "",
  });
  const [loding, setLoding] = useState();
  const addMovie = async () => {
    setLoding(true);
    try {
      await addDoc(movieRef, dataStore);
      swel({
        title: "Succesfully Added",
        icon: "success",
        buttons: false,
        timer: 3000,
        
      });
      navigate("/")
    } catch (error) {
      swel({
        title: error,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoding(false);
  };

  return (
    <>
      <div className="max-w-md mx-auto my-16">
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={dataStore.title}
            onChange={(e) => {
              setDatastore({ ...dataStore, title: e.target.value });
            }}
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={dataStore.image}
            onChange={(e) => {
              setDatastore({ ...dataStore, image: e.target.value });
            }}
            type="text"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image Link
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={dataStore.year}
            onChange={(e) => {
              setDatastore({ ...dataStore, year: e.target.value });
            }}
            type="number"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Year
          </label>
          <label for="floating_repeat_password" className="text-gray-500 ">
            Description
          </label>
          <textarea
            value={dataStore.description}
            onChange={(e) => {
              setDatastore({ ...dataStore, description: e.target.value });
            }}
            type="text"
            className="h-36 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={addMovie}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loding === true ? <Puff height={25} color="white" /> : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
};
