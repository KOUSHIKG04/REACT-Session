import React, { useState } from "react";
import authService from "@/appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          dispatch(login({ userData: currentUser }));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center  bg-gray-50"
      style={{ minHeight: "calc(90vh - 4rem)" }}
    >
      <div className="mx-auto w-full max-w-sm rounded-xl  ">
        <div className="mb-6 flex justify-center">
          {/* <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span> */}
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">
          SIGN UP TO CREATE AN ACCOUNT
        </h2>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="mt-6 space-y-5">
          <div>
            <Input
              id="name"
              {...register("name", { required: true })}
              placeholder="ENTER YOUR NAME"
            />
          </div>
          <div>
            <Input
              id="email"
              {...register("email", { required: true })}
              type="email"
              placeholder="ENTER YOUR EMAIL"
            />
          </div>
          <div>
            <Input
              id="password"
              {...register("password", { required: true })}
              type="password"
              placeholder="ENTER PASSWORD"
            />
          </div>
          <Button type="submit" className="w-full text-white bg-gray-800">
            SIGN UP
          </Button>

          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?&nbsp;
            <Link to="/login" className="font-medium text-gray-500 underline">
              LOGIN HERE
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
