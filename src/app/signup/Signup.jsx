"use client";
import React, { useState } from "react";
import signUpBanner from "../../assets/singup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4s",
  });

  const doSignup = async (event) => {
    event.preventDefault();

    console.log(event);
    console.log(data);
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required !!", {
        position: "top-center",
      });
      return;
    }

    /// TODO: rest of the field

    /////
    // form submit
    try {
      const result = await signUp(data);

      console.log(result);

      toast.success("User is registered !!", {
        position: "top-center",
      });
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4s",
      });
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      toast.error("Signup Error !! " + error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4s",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <div className="flex justify-center m-5">
            <Image
              src={signUpBanner}
              alt="signup banner"
              style={{
                width: "40%",
              }}
            />
          </div>
          <h1 className="text-3xl text-center">Signup Here </h1>
          <form action="#!" className="mt-5" onSubmit={doSignup}>
            {/* name */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                name="user_name"
                onChange={(event) => {
                  setData({
                    ...data,
                    name: event.target.value,
                  });
                }}
                value={data.name}
              />
            </div>
            {/* email */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                id="user_email"
                name="user_email"
                onChange={(event) => {
                  setData({
                    ...data,
                    email: event.target.value,
                  });
                }}
                value={data.email}
              />
            </div>
            {/* password */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                id="user_password"
                onChange={(event) => {
                  setData({
                    ...data,
                    password: event.target.value,
                  });
                }}
                value={data.password}
              />
            </div>
            {/* about section */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2 ps-2"
              >
                About
              </label>
              <textarea
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                id="user_about"
                name="user_about"
                rows={8}
                onChange={(event) => {
                  setData({
                    ...data,
                    about: event.target.value,
                  });
                }}
                value={data.about}
              ></textarea>
            </div>
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-600  rounded hover:bg-green-400"
              >
                Signup
              </button>
              <button
                onClick={resetForm}
                type="button"
                className="px-3 py-2 bg-orange-600 ms-3 rounded hover:bg-orange-400"
              >
                Reset
              </button>
            </div>

            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
