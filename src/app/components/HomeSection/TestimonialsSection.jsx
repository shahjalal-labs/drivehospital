export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rafiq H.",
      review:
        "Quick and reliable. They rescued me at midnight when my car broke down!",
    },
    {
      name: "Nusrat A.",
      review:
        "Affordable and trustworthy. My car always runs smooth after service.",
    },
    {
      name: "Tanvir K.",
      review: "Professional staff, modern garage, and great support.",
    },
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-blue-300">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/70 to-slate-950 border border-slate-700/40 shadow-md shadow-indigo-900/30 hover:shadow-indigo-600/40 transition"
          >
            <p className="text-gray-300 italic leading-relaxed">"{t.review}"</p>
            <h4 className="mt-6 font-semibold text-purple-300">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
