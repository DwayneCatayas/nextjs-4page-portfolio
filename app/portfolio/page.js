export default function PortfolioPage() {
  const projects = [
    { title: 'E-Commerce App', tech: 'Next.js & Tailwind', desc: 'Online shopping interface with cart functionality.' },
    { title: 'Task Manager', tech: 'React & Firebase', desc: 'Real-time task tracking board for project teams.' },
    { title: 'Weather Dashboard', tech: 'JavaScript API', desc: 'Live weather updates and 7-day weather forecasting.' },
  ];

  return (
    <div className="py-8 space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Portfolio & Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-3">
            <h2 className="text-xl font-semibold text-slate-800">{proj.title}</h2>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium">
              {proj.tech}
            </span>
            <p className="text-slate-600 text-sm">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}