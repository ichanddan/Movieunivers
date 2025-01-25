import { Button, Checkbox, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swel from "sweetalert";

import { userRef } from "../../firebase/firebase";
import { getDocs, where } from "firebase/firestore";

export default function LogIn() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    const user = await getDocs(userRef, where("Number", "==", data.email));
    if (user.empty) {
      swel({
        title: "Number not registered",
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    user.forEach(async (doc) => {
      if (doc.data().Password === data.password) {
        swel({
          title: "Succesfully Loged In",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        await localStorage.setItem(
          "userData",
          JSON.stringify({ id: doc.id, ...doc.data() })
        );
        window.location.href = "/";
      } else {
        swel({
          title: "Password is incorrect",
          icon: "error",
          buttons: false,
          timer: 3000,
        });
      }
    });
    console.log(user);
  };
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <p className="pb-4 text-left text-3xl font-semibold">
          Log In
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </p>
        <Form
          className="flex flex-col gap-4"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your number"
            type="number"
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {/* {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )} */}
              </button>
            }
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="flex w-full items-center justify-between px-1 py-2">
            {/* <Checkbox defaultSelected name="remember" size="sm">
              Remember me
            </Checkbox> */}
            {/* <Link className="text-default-500" href="#" size="sm">
              Forgot password?
            </Link> */}
          </div>
          <Button className="w-full" color="primary" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
}
