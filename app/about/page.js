export default function AboutPage() {
  return (
    <div className="py-8 max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">About Me</h1>
      <p className="text-slate-600 leading-relaxed">
        Hello! I am a passionate web developer creating clean, efficient, and user-friendly web applications.
      </p>
      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="text-xl font-semibold text-slate-800">Core Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-slate-700">
          <li>✔ React / Next.js</li>
          <li>✔ JavaScript (ES6+)</li>
          <li>✔ HTML5 & CSS3 / Tailwind</li>
          <li>✔ Git & GitHub Version Control</li>
        </ul>
      </div>
    </div>
  );
}