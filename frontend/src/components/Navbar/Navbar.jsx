import React, { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="bg-orange-400 shadow-md w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-15">
                {/* Logo */}
                <div className="text-xl font-bold">TODO</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="hover:text-blue-500">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-blue-500">
                        About Us
                    </Link>
                    {!isLoggedIn ? (
                        <>
                            <button className="px-4 py-2 cursor-pointer">
                                <Link to="/signup">Sign Up</Link>
                            </button>
                            <button className="px-5 py-2 bg-blue-100 text-black rounded-md">
                                <Link to="/login">Login</Link>

                            </button>
                        </>
                    ) : (
                        <div className="relative">
                            <UserCircle size={32} className="cursor-pointer" />
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md p-4 space-y-4">
                    <Link to="/" className="block hover:text-blue-500">
                        Home
                    </Link>
                    <Link to="/about" className="block hover:text-blue-500">
                        About Us
                    </Link>
                    {!isLoggedIn ? (
                        <>
                            <button className="w-full px-4 py-2 ">
                                <Link to="/signup">Sign Up</Link>
                            </button>
                            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
                                <Link to="/login">Login</Link>
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <UserCircle size={32} />
                            <span>Profile</span>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
