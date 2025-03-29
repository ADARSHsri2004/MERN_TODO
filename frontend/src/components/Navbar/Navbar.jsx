import React, { useState, useEffect } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../context/AuthSlices";
import logoutUser from "../Logout";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = () => {
        dispatch(login());
    };
    const navigate=useNavigate()
    return (
        <nav className="bg-white shadow-md w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="text-xl font-bold">toDo</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/about" className="hover:text-blue-500">About Us</Link>
                    {!isLoggedIn ? (
                        <>
                            <button className="px-4 py-2 border rounded-md" >
                                <Link to="/signup">Sign Up</Link> </button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" >
                                <Link to="/login">Login</Link>
                            </button>
                        </>
                    ) : (
                        <div className="relative flex items-center space-x-4">
                            <button onClick={() => { navigate('/profile')}}> <UserCircle  size={32} className="cursor-pointer" /></button>
                           
                            <button className="px-4 py-2 border rounded-md cursor-pointer" onClick={() => { logoutUser() }}>Logout</button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md p-4 space-y-4">
                    <Link to="/" className="block hover:text-blue-500">Home</Link>
                    <Link to="/about" className="block hover:text-blue-500">About Us</Link>
                    {!isLoggedIn ? (
                        <>
                            <button className="w-full px-4 py-2 border rounded-md" onClick={handleLogin}>Sign Up</button>
                            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleLogin}>Login</button>
                        </>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <UserCircle size={32} />
                            <span>Profile</span>
                            <button className="px-4 py-2 border rounded-md" onClick={() => { logoutUser() }}>Logout</button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
