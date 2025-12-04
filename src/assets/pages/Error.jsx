import React from "react";
import { Link } from "react-router";


const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            
            <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
            
            <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>

            <p className="text-gray-600 max-w-md mt-3">
                The page you’re looking for doesn’t exist or has been moved.  
                Please check the URL or return to the homepage.
            </p>

            <Link
                to="/"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default Error;
