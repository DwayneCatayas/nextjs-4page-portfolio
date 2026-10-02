export default function GalleryPage() {
  const images = [
    { id: 1, title: 'Project Design Spec', color: 'bg-indigo-200' },
    { id: 2, title: 'Component Library', color: 'bg-emerald-200' },
    { id: 3, title: 'Mobile Responsive Test', color: 'bg-amber-200' },
    { id: 4, title: 'UI Concept Mockup', color: 'bg-rose-200' },
  ];

  return (
    <div className="py-8 space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Project Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className={`${img.color} h-48 rounded-xl flex items-center justify-center p-4 text-center font-medium text-slate-800 shadow-inner`}>
            {img.title}
          </div>
        ))}
      </div>
    </div>
  );
}