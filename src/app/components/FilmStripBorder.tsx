export function FilmStripBorder({ position }: { position: 'top' | 'bottom' }) {
  return (
    <div
      className={`fixed ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 h-8 bg-black z-50 flex items-center justify-around`}
    >
      {[...Array(50)].map((_, i) => (
        <div key={i} className="w-3 h-4 bg-white rounded-sm" />
      ))}
    </div>
  );
}
