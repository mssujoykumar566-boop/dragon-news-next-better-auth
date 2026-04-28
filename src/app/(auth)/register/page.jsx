"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const emailValue = watch("email");

  const handleRegisterFunc = (data) => {
    // e.preventDefault();
    // const email = e.target.email.value
    // const password = e.target.password.value
    // console.log(email,password)
    console.log(data, "data");
    const {name, photo,email, password} = data;
  };
  //   console.log(watch('email') )

  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
              {...register("photo", { required: "Photo URL field is required" })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              {...register("password", { required: "Password field is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
         
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Register</button>
        </form>

        {/* <p className="mt-6 ">
          Dont’t Have An Account ?{" "}
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default RegisterPage;
