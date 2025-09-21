// src/components/GalleryTile.jsx
export default function GalleryTile({ cover, title, subtitle, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-xl border bg-white text-left shadow-sm"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-3">
        <div className="text-xs text-gray-500">{subtitle}</div>
        <div className="text-sm font-medium text-gray-900">{title}</div>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/30 text-white group-hover:flex">
        <span className="rounded bg-black/60 px-3 py-1 text-sm">
          Ver galeria
        </span>
      </div>
    </button>
  );
}
