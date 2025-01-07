import React from 'react'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen   py-8 px-4">
      <div className="w-full max-w-sm bg-white  rounded-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          {loading ? "Processing" : "CREATE ACCOUNT"}
        </h1>

        <div className="mb-4">
          <Label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-1"
          >
            Username
          </Label>
          <Input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-lg 
            focus:outline-none "
            onChange={(e) =>
              setUser({
                ...user,
                username: e.target.value,
              })
            }
            value={user.username}
          />
        </div>

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
       
          className="w-full text-white p-2 rounded-lg  transition-colors"
        >
          {buttonDisabled ? "PLEASE FILL ALL FIELDS " : "SIGN UP"}
        </Button>

        <p className="text-gray-600 text-center mt-4">
          Already have an account ?{" "}
          <Link
            href="/login"
            className="text-blue-500 hover:underline font-medium text-sm"
          >
            LOGIN HERE
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup
