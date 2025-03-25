import { LogIn } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-100 px-4">
            {/* Login Form Card */}
            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col justify-center">
                <div className="flex justify-center">
                    <LogIn className="w-16 h-16 text-blue-500 mb-4" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>
                <p className="text-sm text-gray-600 text-center mt-2">Log in to access your tasks.</p>

                <form className="mt-6 space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-4">
                    Don't have an account? <Link to="/signup" className="text-blue-500 font-semibold">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
