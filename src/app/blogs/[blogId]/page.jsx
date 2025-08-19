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
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400">
          {blog.title}
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          By {blog.author} | {format(new Date(blog.date), "MMM dd, yyyy")}
        </p>
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
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

      {/* Cover Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-700">
        <img
          src={blog.cover}
          alt={blog.title}
          className="w-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="prose prose-invert max-w-3xl mx-auto text-gray-300">
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

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link href="/blog">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-white shadow-md transition">
            Back to Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsDetails;
