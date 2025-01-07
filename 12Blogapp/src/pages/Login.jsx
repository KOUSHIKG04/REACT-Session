import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  py-8 px-4">
      <div className="w-full max-w-sm bg-white  p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          {loading ? "Processing" : "LOGIN"}
        </h1>

        <div className="mb-4">
          <Label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg
            focus:outline-none"
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-6">
          <Label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg 
            focus:outline-none"
            value={user.password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          />
        </div>

        <Button
          onClick={onLogin}
          className="w-full text-white p-2 rounded-lg  transition-colors"
        >
          {buttonDisabled ? "PLEASE FILL ALL FIELDS " : "LOGIN"}
        </Button>

        <p className="text-gray-600 text-center mt-4">
          Dont&apos;s have an account ?{" "}
          <Link
            href="/signup"
            className="text-blue-500 hover:underline font-medium text-sm"
          >
            SIGNUP HERE
          </Link>
        </p>

        <div>
          <p className="text-gray-600 text-center mt-6">
            <Link
              href="/forgetpassword"
              className="font-semibold underline text-sm"
            >
              FORGOT PASSWORD CLICK HERE!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login
