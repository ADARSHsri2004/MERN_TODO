import React from "react";
export default function AboutUs() {
    return (
      <div className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-blue-500 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold">About Todo App</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Our mission is to help you stay organized, productive, and stress-free with a simple yet powerful task management solution.
          </p>
        </div>
  
        {/* Mission Section */}
        <section className="max-w-5xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            At Todo App, we believe in making task management **simple, effective, and accessible**. Our goal is to provide a tool that helps you **focus, organize, and achieve** more in your daily life.
          </p>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">🚀 Fast & Efficient</h3>
                <p className="text-gray-600 mt-2">
                  Our app is designed for **speed and efficiency**, helping you manage tasks without delays.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">📱 Cross-Platform</h3>
                <p className="text-gray-600 mt-2">
                  Access your tasks from **anywhere** – mobile, tablet, or desktop.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">🔒 Secure & Private</h3>
                <p className="text-gray-600 mt-2">
                  We prioritize your **data privacy and security**, keeping your tasks safe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  