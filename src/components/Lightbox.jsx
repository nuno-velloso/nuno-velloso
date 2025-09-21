import { useEffect, useRef, useState } from "react";

export default function Lightbox({
  open,
  images = [],
  startIndex = 0,
  title = "Galeria",
  onClose,
}) {
  const [index, setIndex] = useState(startIndex);
  const count = images.length;
  const startX = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  // teclado + bloquear scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, count, onClose]);

  if (!open || count === 0) return null;

  const onPointerDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onPointerUp = (e) => {
    if (!dragging.current) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    const delta = endX - startX.current;
    if (Math.abs(delta) > 50)
      setIndex((i) => (i + (delta < 0 ? 1 : -1) + count) % count);
    dragging.current = false;
  };

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[999] flex items-center justify-center"
    >
      {/* backdrop */}
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/80"
        aria-label="Fechar galeria"
      />

      {/* content */}
      <div
        className="relative z-10 flex h-[90vh] w-[92vw] max-w-6xl select-none"
        onMouseDown={onPointerDown}
        onMouseUp={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchEnd={onPointerUp}
      >
        {/* fechar */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/10 hover:bg-white"
          aria-label="Fechar"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* seta esquerda */}
        {count > 1 && (
          <button
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow ring-1 ring-black/10 hover:bg-white"
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
        )}

        {/* imagem */}
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={images[index]}
            alt={`${title} — ${index + 1}/${count}`}
            className="max-h-full max-w-full object-contain"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* seta direita */}
        {count > 1 && (
          <button
            onClick={() => setIndex((i) => (i + 1) % count)}
            aria-label="Seguinte"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow ring-1 ring-black/10 hover:bg-white"
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
        )}

        {/* contador */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
          {index + 1} / {count}
        </div>
      </div>
    </div>
  );
}
