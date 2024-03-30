import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./PasswordHide/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./PasswordHide/EyeFilledIcon";

export default function LogIn() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
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
                  type="email"
                  variant="underlined"
                  label="Email"
                  placeholder="Enter your email"
                  className="pb-5"
                />

                <Input
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
        <div
          className="REMOVE-THIS-ELEMENT-IF-YOU-ARE-USING-THIS-PAGE hidden treact-popup fixed inset-0 items-center justify-center"
          // style="background-color: rgba(0,0,0,0.3);"
        >
          <div className="max-w-lg p-8 sm:pb-4 bg-white rounded shadow-lg text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center">
              <div className="bg-green-200 p-2 rounded-full flex items-center mb-4 sm:mb-0 sm:mr-2">
                <svg
                  className="text-green-800 inline-block w-5 h-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              Free TailwindCSS Component Kit!
            </h3>
            <p>
              I recently released Treact, a{" "}
              <span className="font-bold">free</span> TailwindCSS Component Kit
              built with React.
            </p>
            <p className="mt-2">
              It has 52 different UI components, 7 landing pages, and 8 inner
              pages prebuilt. And they are customizable!
            </p>
            <div className="mt-8 pt-8 sm:pt-4 border-t -mx-8 px-8 flex flex-col sm:flex-row justify-end leading-relaxed">
              <button className="close-treact-popup px-8 py-3 sm:py-2 rounded border border-gray-400 hover:bg-gray-200 transition duration-300">
                Close
              </button>
              <Link
                className="font-bold mt-4 sm:mt-0 sm:ml-4 px-8 py-3 sm:py-2 rounded bg-purple-700 text-gray-100 hover:bg-purple-900 transition duration-300 text-center"
                href="https://treact.owaiskhan.me"
                target="_blank"
              >
                See Treact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}