// src/components/SimpleGallery.jsx
import { useEffect, useState } from "react";
import galleryItemsDefault from "../data/galleryItems";

/**
 * Galeria masonry com lightbox.
 * Props:
 *  - items?: Array<{ src: string, alt?: string }>
 *  - initial?: number (default 24)
 *  - step?: number (default 24)
 */
export default function SimpleGallery({ items, initial = 24, step = 24 }) {
  const list =
    Array.isArray(items) && items.length ? items : galleryItemsDefault;

  // paginação
  const [visible, setVisible] = useState(initial);
  const show = list.slice(0, visible);

  // lightbox
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + show.length) % show.length);
  const next = () => setIdx((i) => (i + 1) % show.length);

  // Teclado: Esc / ← / →
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, show.length]);

  return (
    <div>
      {/* Masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {show.map((img, i) => (
          <button
            key={i}
            onClick={() => openAt(i)}
            className="mb-4 block w-full overflow-hidden rounded-xl bg-gray-100"
            style={{ breakInside: "avoid" }}
            aria-label={`Abrir imagem ${i + 1}`}
          >
            <img
              src={img.src}
              alt={img.alt || "Foto da galeria"}
              className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {/* Ver mais */}
      {visible < list.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setVisible((v) => Math.min(v + step, list.length))}
            className="rounded bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
          >
            Ver mais
          </button>
        </div>
      )}

      {/* Lightbox */}
      {open && show.length > 0 && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm"
          onClick={close} // fechar ao clicar fora
          role="dialog"
          aria-modal="true"
        >
          {/* Contentor que trava a propagação */}
          <div
            className="absolute inset-0 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={show[idx].src}
              alt={show[idx].alt || "Foto da galeria"}
              className="max-h-[85vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
            />
          </div>

          {/* Contador */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80 select-none">
            {idx + 1} / {show.length}
          </div>

          {/* Fechar (impede propagação) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/10 hover:bg-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Setas (impedem propagação) */}
          {show.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow ring-1 ring-black/10 hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Seguinte"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow ring-1 ring-black/10 hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
