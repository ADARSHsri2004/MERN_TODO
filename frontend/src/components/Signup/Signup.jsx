import { CheckSquare } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    //signup logic form usign state
    const [inputs, setinputs] = useState(
        {
            email: "",
            username: "",
            password: ""
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setinputs(prev => ({ ...prev, [name]: value }));
    }
    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:3005/api/v1/signup"
            const response = await fetch(url, {
                method: "POST", headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)

            })
            const result = await response.json()
            if (!result.error) {
                navigate("/")
            }
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
            {/* Signup Form Card */}
            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col justify-center">
                <div className="flex justify-center">
                    <CheckSquare className="w-16 h-16 text-blue-500 mb-4" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center">Create an Account</h2>
                <p className="text-sm text-gray-600 text-center mt-2">Sign up to manage your tasks efficiently.</p>

                <form onSubmit={handleSignup} className="mt-6 space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={inputs.email}
                        className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={inputs.username}

                        className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={inputs.password}
                        className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-4">
                    Already have an account? <Link to="/login" className="text-blue-500 font-semibold">Login</Link>
                </p>
            </div>
        </div>
    );
}
