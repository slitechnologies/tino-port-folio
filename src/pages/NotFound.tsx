import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
      >
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;
