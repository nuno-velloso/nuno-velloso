import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    slug: "passeios",
    title: "Passeio a Cavalo",
    desc: "Passeios pela Quinta da Marinha. A escola disponibiliza toque.",
    badges: ["6+ anos", "30–50 min", "≤ 90 kg"],
  },
  {
    slug: "volteio",
    title: "Aulas de Volteio",
    desc: "Primeiro contacto com o cavalo com exercícios de ginástica para equilíbrio e controlo psicossomático.",
    badges: ["Iniciação"],
  },
  {
    slug: "iniciacao-sela",
    title: "Iniciação à Sela",
    desc: "Bases de segurança e condução. O aluno ganha controlo do cavalo.",
    badges: ["Iniciantes"],
  },
  {
    slug: "ensino",
    title: "Aulas de Ensino",
    desc: "Aperfeiçoamento técnico e desenvolvimento do equilíbrio do cavalo.",
    badges: ["Intermédio/Avançado"],
  },
  {
    slug: "obstaculos",
    title: "Aula de Obstáculos",
    desc: "Iniciação e acompanhamento em competição.",
    badges: ["Treino", "Competição"],
  },
  {
    slug: "acompanhamento",
    title: "Acompanhamento em Treinos/Competição",
    desc: "Preparação específica e apoio em prova.",
    badges: ["Sob marcação"],
  },
  {
    slug: "cavalos-proprios",
    title: "Treino com Cavalo Próprio",
    desc: "Plano ajustado ao par cavalo/cavaleiro.",
    badges: ["Plano personalizado"],
  },
  {
    slug: "colonias",
    title: "Colónias de Férias",
    desc: "Férias escolares com contacto diário e rotinas do cavalo.",
    badges: ["3.ª–6.ª", "10h–17h"],
  },
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const count = services.length;
  const trackRef = useRef(null);
  const startX = useRef(0);
  const dragging = useRef(false);

  const go = (i) => setIndex((prev) => (i + count) % count);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // teclado (setas)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // swipe (mobile)
  const onPointerDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onPointerUp = (e) => {
    if (!dragging.current) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    const delta = endX - startX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    dragging.current = false;
  };

  return (
    <section id="servicos" className="bg-gray-50 border-t scroll-mt-20">
      <div className="container mx-auto px-5 py-16 md:py-24">
        {/* título + horário */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Serviços
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            A escola está aberta das <strong>9h–13h</strong> e{" "}
            <strong>15h–18h</strong>.
          </p>
        </div>

        {/* carrossel */}
        <div className="relative">
          {/* trilho */}
          <div
            ref={trackRef}
            className="overflow-hidden rounded-2xl"
            onMouseDown={onPointerDown}
            onMouseUp={onPointerUp}
            onTouchStart={onPointerDown}
            onTouchEnd={onPointerUp}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {services.map((s) => (
                <div key={s.slug} className="w-full shrink-0 px-1">
                  <article className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-gray-700">{s.desc}</p>

                    {s.badges?.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.badges.map((b) => (
                          <li
                            key={b}
                            className="rounded-full border px-2.5 py-1 text-xs text-gray-700"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* setas */}
          {count > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white hidden sm:flex"
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
                onClick={next}
                aria-label="Seguinte"
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white hidden sm:flex"
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

          {/* pontos */}
          {count > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full ${
                    i === index ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA único */}
        <div className="mt-10 md:mt-12 text-center">
          <Link
            to="/contactos"
            className="inline-flex items-center rounded bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
          >
            Falar connosco
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Dúvidas ou marcações? Estamos deste lado.
          </p>
        </div>
      </div>
    </section>
  );
}
