import Image from "next/image";
import { Smartphone } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">
        <div className="hidden md:block relative md:w-1/2">
          <Image
            src="/public/Image.jpg"
            alt="Shopping illustration"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 w-full md:w-1/2">
          <div className="flex flex-col items-center mb-8">
            <Smartphone className="h-12 w-12 text-purple-600" />
            <p className="mt-1 text-gray-600">
              Welcome to{" "}
              <span className="font-semibold">Floridda Software</span>
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Login To Dashboard
          </h2>
          <hr className="border-gray-300 mb-6" />

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition cursor-pointer"
            >
              Login
            </button>

            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
              Error Message
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
