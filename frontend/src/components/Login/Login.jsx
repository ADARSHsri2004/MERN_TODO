import { LogIn } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, logout, setUser } from "../../context/AuthSlices";

export default function Login() {
    //signup logic form usign state
    const [inputs, setinputs] = useState(
        {
            email: "",
            password: ""
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setinputs(prev => ({ ...prev, [name]: value }));
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:3005/api/v1/signin"
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs),
                credentials: "include" // 🔹 IMPORTANT: Allows cookies to be sent

            })
            const result = await response.json()
            console.log(result.user)
            if (response.status === 200) {
                dispatch(login())
                dispatch(setUser(result.user)) 
                navigate("/") 
            }

        } catch (error) {
            // isLoggedIn = false;
            // localStorage.setItem(isLoggedIn)
            dispatch(logout())
            console.log(error)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-100 px-4">
            {/* Login Form Card */}
            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col justify-center">
                <div className="flex justify-center">
                    <LogIn className="w-16 h-16 text-blue-500 mb-4" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>
                <p className="text-sm text-gray-600 text-center mt-2">Log in to access your tasks.</p>

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={inputs.email}
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
