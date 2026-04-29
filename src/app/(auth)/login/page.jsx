"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const emailValue = watch("email");

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    // e.preventDefault();
    // const email = e.target.email.value
    // const password = e.target.password.value
    // console.log(email,password)
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Signin successfull");
    }
  };
  //   console.log(watch('email') )

  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
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
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Enter your password"
              {...register("password", {
                validate: (value) => {
                  if (!emailValue) return true; // email empty → password error দেখাবে না
                  if (!value) return "Password field is required";
                  return true;
                },
              })}
            />
            <span
              className="absolute top-4.5 right-2 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>

        <p className="mt-6 ">
          Dont’t Have An Account ?{" "}
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
