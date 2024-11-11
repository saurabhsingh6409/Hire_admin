import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold mb-6 text-teal-400 text-center">
        Welcome to the Student Hiring Platform
      </h1>
      <p className="text-lg text-center max-w-2xl mb-12">
        Our platform connects employers with talented students, providing an efficient way to post job opportunities and discover new talent. Join us today to find the best fit for your organization!
      </p>
      
      <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold rounded-md shadow-lg transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
