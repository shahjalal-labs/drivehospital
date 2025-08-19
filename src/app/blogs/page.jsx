import Link from "next/link";
import { format } from "date-fns";

// Mock blog posts (replace later with DB/API fetch)
const mockPosts = [
  {
    id: "1",
    title: "How to Maintain Your Car Engine Efficiently",
    excerpt:
      "Learn the key tips to keep your engine running smoothly and extend its lifespan...",
    author: "Md. Shahjalal",
    date: "2025-08-19",
    cover: "https://i.ibb.co/5MvmD2g/88.jpg",
    slug: "maintain-engine-efficiently",
  },
  {
    id: "2",
    title: "Top 5 Car Services You Should Never Skip",
    excerpt:
      "Regular services are crucial to prevent costly repairs. Here’s a complete guide...",
    author: "Md. Shahjalal",
    date: "2025-08-18",
    cover: "https://i.ibb.co/wh7t3N3/555.jpg",
    slug: "top-5-car-services",
  },
  {
    id: "3",
    title: "Electrical Systems in Modern Vehicles Explained",
    excerpt:
      "Understanding your car's electrical system can save you from sudden breakdowns...",
    author: "Md. Shahjalal",
    date: "2025-08-17",
    cover: "https://i.ibb.co/KzCG8qr/8888.jpg",
    slug: "electrical-systems-explained",
  },
  {
    id: "4",
    title: "Choosing the Right Engine Oil for Your Car",
    excerpt:
      "Engine oil is the lifeblood of your car. Learn which type is best for your vehicle...",
    author: "Md. Shahjalal",
    date: "2025-08-16",
    cover: "https://i.ibb.co/T2cpBd5/888.jpg",
    slug: "right-engine-oil",
  },
  {
    id: "5",
    title: "How to Detect Transmission Issues Early",
    excerpt:
      "Transmission problems can be costly. Here’s how to spot warning signs before they escalate...",
    author: "Md. Shahjalal",
    date: "2025-08-15",
    cover: "https://i.ibb.co/wh7t3N3/555.jpg",
    slug: "detect-transmission-issues",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 px-6 lg:px-20 py-12 relative">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Drive Hospital Blog
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Tips, tutorials, and insights from Drive Hospital and Md. Shahjalal —
          keeping your vehicle in peak condition and sharing industry knowledge.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-purple-600/50 transition"
          >
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-300">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-400 text-sm">{post.excerpt}</p>
              <div className="mt-4 flex justify-between items-center text-gray-400 text-xs">
                <span>{post.author}</span>
                <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <button className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition text-white text-sm shadow-md shadow-pink-900/40">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-purple-300 mb-4">
          Stay Updated with Drive Hospital
        </h2>
        <p className="text-gray-400 mb-6">
          Subscribe to our newsletter and never miss an update on car
          maintenance, tips, and new services.
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-l-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none w-60"
          />
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-r-xl font-semibold text-white shadow-md transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
