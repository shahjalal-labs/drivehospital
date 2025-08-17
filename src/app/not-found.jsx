import Link from "next/link";

const Notfound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center  text-white max-w-2xl mx-auto">
      <div className="bg-gray-900">
        <h1 className="text-9xl font-extrabold tracking-widest text-gray-200">
          404
        </h1>
        <div className="absolute rotate-12 rounded bg-blue-500 px-2 text-sm text-white">
          Page Not Found
        </div>
        <p className="mt-6 text-lg text-gray-400">
          Oops! The page you're looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border border-transparent bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
