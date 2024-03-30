import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./PasswordHide/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./PasswordHide/EyeFilledIcon";

export default function LogIn() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [logData, setLogData]= useState({
    Number:"",
    Password:""
  })
  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm: bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="text-center"></div>
            <div className="mt-12 flex flex-col items-center drop-shadow-md">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Log In</h1>
              <div className="mx-auto max-w-xs mt-5">
                <Input
                value={logData.Number}
                onChange={(e)=>{setLogData({...logData, Number:e.target.value})}}
                  type="Number"
                  variant="underlined"
                  label="Number"
                  placeholder="Enter your number"
                  className="pb-5"
                />

                <Input
                value={logData.password}
                onChange={(e)=>{setLogData({...logData, password:e.target.value})}}
                  label="Password"
                  variant="underlined"
                  placeholder="Enter your password"
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
                  <Button size="md" color="primary" className="mt-5">
            
                    <span>Login</span>
                  </Button>
                </div>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    <span> Terms of Service</span>
                  </Link>
                  <span> and</span>
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    <span> Privacy Policy</span>
                  </Link>
                </p>
              </div>
              <div className="mt-3">
                <h1>
                  Don't have a account{" "}
                  <Link
                    to="/signup"
                    className="text-red-500 hover:border-b-2 border-b-green-400"
                  >
                    {" "}
                    SignUp
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
