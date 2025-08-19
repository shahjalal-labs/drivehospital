export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Technicians",
      desc: "Certified professionals with years of hands-on experience.",
    },
    {
      title: "24/7 Support",
      desc: "Emergency roadside and on-call help whenever you need.",
    },
    {
      title: "Affordable Pricing",
      desc: "Transparent, honest pricing. No hidden surprises.",
    },
    {
      title: "Trusted Service",
      desc: "Hundreds of happy customers trust us every month.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-pink-300">
        Why Choose Us?
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/70 to-slate-950 border border-slate-700/40 shadow-lg shadow-purple-900/40 hover:shadow-purple-600/50 hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              {f.title}
            </h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
