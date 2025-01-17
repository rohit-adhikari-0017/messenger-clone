import React from "react";

function HeroLoginSection() {
  return (
    <div className="hero-login-section bg-white">
      {/* Hero Container */}
      <div className="flex flex-col md:flex-row justify-between  container pt-10">
        {/* Login Left Box*/}
        <div className="login-left-box w-[40%]">
          {/* login content */}
          <h1 className="text-7xl  font-bold mb-4 bg-gradient-to-r from-blue-600 via-pink-500 to-pink-500 text-transparent bg-clip-text">
            A place for meaningful conversations
          </h1>

          <p className="my-10">
            Connect with your friends and family, build your community and
            deepen your interests.
          </p>
          {/* Login form */}
          <form>
            <div className="mb-4 w-full">
              <input
                type="email"
                name="email"
                className="px-4 py-1 border border-gray-300 rounded-md w-[300px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Email address or phone number"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                className="px-4 py-1 border border-gray-300 w-[300px] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="pr-4 pl-4 mt-4 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-700"
            >
              Log In
            </button>

            {/* Checkbox Section */}
            <div className="mt-4 flex items-center pt-5">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-gray-700 text-sm"
              >
                Keep me signed in
              </label>
            </div>
          </form>
          {/* Store Image Box */}
          <div className="store-img-box flex pt-9 gap-4">
            <div>
              <img
                src="../assets/images/app-img.svg"
                className="h-[40px]"
                alt=""
              />
            </div>
            <div>
              <img
                src="../assets/images/microsoft-img.png"
                className="h-[40px]"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Login Right Box */}
        <div className="right-image items-center justify-center  md:w-1/2 md:mt-0 w-[40%] flex ">
          <img
            src="../assets/images/hero-img.png"
            alt="Illustration"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroLoginSection;
