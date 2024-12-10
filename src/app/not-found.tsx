"use client";

import React from "react";

const NotFound = () => {
  return (
    <div className=" fix-height min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">268- Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md shadow-sm transition duration-300 ease-in-out"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
