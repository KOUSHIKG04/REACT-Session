import { useState } from "react";
import authService from "@/appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login as authLogin } from "@/store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const validateUserId = (userId) => {
    const userIdRegex = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,35}$/;
    return userIdRegex.test(userId);
  };

  const login = async (data) => {
    setError("");
    if (!validateUserId(data.userId)) {
      setError(
        "Invalid userId. Must be at most 36 chars, valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char."
      );
      return;
    }

    try {
      const session = await authService.login(data);
      console.log("Session created:", session);

      if (session) {
        const userData = await authService.getCurrentUser();
        console.log("User data:", userData);

        if (userData) {
          dispatch(authLogin({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-gray-50"
      style={{ minHeight: "calc(90vh - 4rem)" }}
    >
      <div className="mx-auto w-full max-w-sm  rounded-xl">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          LOGIN TO YOUR ACCOUNT
        </h2>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-6 space-y-5">
          <div>
            <Input
              id="email"
              {...register("email", { required: true })}
              type="email"
              placeholder="EMAIL ADDRESS :"
            />
          </div>
          <div>
            <Input
              id="password"
              {...register("password", { required: true })}
              type="password"
              placeholder="YOUR PASSWORD"
            />
          </div>
          <Button type="submit" className="w-full text-white bg-gray-800">
            Login
          </Button>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don&apos;t have an account?&nbsp;
            <Link to="/signup" className="font-medium text-gray-500 underline">
              SIGN UP HERE
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
