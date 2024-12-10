"use client";

import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className=" fix-height min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-800 font-medium mb-6">
          Oops! CHI HAJA GHALAT ASAHBi
        </p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or something went wrong.
        </p>
        <Link
          href="/"
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Go to Home Bzerba
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

