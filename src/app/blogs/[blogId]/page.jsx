// app/blog/static-blog/page.jsx
import Link from "next/link";
import { format } from "date-fns";

const BlogsDetails = () => {
  const blog = {
    title: "How to Maintain Your Car Engine Efficiently",
    cover: "https://i.ibb.co/5MvmD2g/88.jpg",
    author: "Md. Shahjalal",
    date: "2025-08-19",
    content: `
Maintaining your car engine is critical for performance and longevity. Here are some actionable steps:

1. **Regular Oil Changes:** Use high-quality engine oil and replace it as recommended. This prevents friction and wear.
2. **Check Fluids:** Coolant, brake fluid, and transmission fluid should always be at proper levels.
3. **Air Filters:** Clean or replace air filters to ensure optimal combustion.
4. **Spark Plugs:** Inspect and replace spark plugs periodically to avoid misfires.
5. **Listen & Observe:** Unusual sounds, vibrations, or warning lights often indicate underlying issues.
6. **Professional Diagnostics:** Schedule annual check-ups for preventive maintenance.
    `,
    tags: ["engine", "maintenance", "car", "tips"],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 px-6 lg:px-20 py-12">
      {/* Hero Cover Image */}
      <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 max-w-3xl mx-auto">
        <img
          src={blog.cover}
          alt={blog.title}
          className="w-full h-96 md:h-[500px] object-cover brightness-90 transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/80"></div>
        <div className="absolute bottom-6 left-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {blog.title}
          </h1>
          <p className="text-gray-300 mt-1 text-sm">
            By {blog.author} | {format(new Date(blog.date), "MMM dd, yyyy")}
          </p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-purple-700/50 text-purple-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-invert max-w-3xl mx-auto text-gray-300 space-y-6">
        {blog.content.split("\n").map((line, idx) =>
          line.match(/^\d\./) ? (
            <ul key={idx} className="list-disc list-inside mb-2">
              {line
                .split(/\d\.\s/)
                .filter(Boolean)
                .map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
          ) : (
            <p key={idx}>{line}</p>
          ),
        )}
      </div>

      {/* Author / CTA Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-3xl mx-auto">
        <div className="flex items-center gap-4">
          <img
            src="https://i.ibb.co/BzZx5wD/mdshahjalal.jpg" // replace with your personal image
            alt="Md. Shahjalal"
            className="w-16 h-16 rounded-full border-2 border-purple-600"
          />
          <div>
            <p className="font-semibold text-white">Md. Shahjalal</p>
            <p className="text-gray-400 text-sm">
              Author & MERN Stack Developer
            </p>
          </div>
        </div>
        <Link href="/contact">
          <button className="mt-4 md:mt-0 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-white shadow-md transition">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Back to Blog CTA */}
      <div className="mt-12 text-center">
        <Link href="/blogs">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-white shadow-md transition">
            Back to Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsDetails;
