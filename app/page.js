export default function HomePage() {
  return (
    <div className="py-12 text-center max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
        Welcome to My Digital Workspace
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed">
        Explore my portfolio, background, and visual showcase built with Next.js App Router and Tailwind CSS.
      </p>
      <div className="pt-4 flex justify-center gap-4">
        <a href="/portfolio" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          View Portfolio
        </a>
        <a href="/about" className="bg-slate-200 text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-300 transition">
          About Me
        </a>
      </div>
    </div>
  );
}