import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./PasswordHide/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./PasswordHide/EyeFilledIcon";
import { userRef } from "../../firebase/firebase";
import swel from "sweetalert";
import { Puff } from "react-loader-spinner";
import { addDoc } from "@firebase/firestore";

export default function SignUp() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [dataStore, setDatastore] = useState({
    Name: "",
    Number: "",
    Password: "",
  });
  const [loding, setLoding] = useState();
  const addMovie = async () => {
    setLoding(true);
    try {
      await addDoc(userRef, dataStore);

      swel({
        title: "Succesfully Added",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      navigate("/login");
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
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm: bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="text-center"></div>
            <div className="mt-12 flex flex-col items-center drop-shadow-md">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              <div className="mx-auto max-w-xs mt-5">
                <Input
                  type="text"
                  variant="underlined"
                  label="Name"
                  placeholder="Enter your name"
                  className="pb-5"
                  isRequired
                  value={dataStore.Name}
                  onChange={(e) =>
                    setDatastore({ ...dataStore, Name: e.target.value })
                  }
                />
                <Input
                  type="number"
                  variant="underlined"
                  label="Number"
                  placeholder="Enter your Number"
                  className="pb-5"
                  isRequired
                  value={dataStore.Number}
                  onChange={(e) =>
                    setDatastore({ ...dataStore, Number: e.target.value })
                  }
                />

                <Input
                  label="Password"
                  isRequired
                  variant="underlined"
                  placeholder="Enter your password"
                  value={dataStore.Password}
                  onChange={(e) =>
                    setDatastore({ ...dataStore, Password: e.target.value })
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs"
                />
                <div className="flex items-center justify-center">
                  <Button
                    onClick={addMovie}
                    size="md"
                    color="primary"
                    className="mt-5"
                    type="submit"
                  >
                    {loding === true ? (
                      <Puff height={25} color="white" />
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>{" "}
                        <span>signup</span>
                      </>
                    )}
                  </Button>
                </div>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </Link>
                  and its
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="mt-3">
                <h1>
                  Do you hav a account{" "}
                  <Link to="/login" className="text-red-500">
                    {" "}
                    SignIn
                  </Link>
                </h1>
              </div>
              <div className="w-full flex-1 mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
