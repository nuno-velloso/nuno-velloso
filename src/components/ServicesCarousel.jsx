// src/components/ServicesCarousel.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// IMAGENS (ajusta caminhos se necessário)
import imgPasseios from "../assets/galeria/colonia-ferias/colonia5.jpg";
import imgVolteio from "../assets/galeria/colonia-ferias/colonia7.jpg";
import imgIniciacao from "../assets/galeria/colonia-ferias/colonia6.jpg";
import imgEnsino from "../assets/galeria/colonia-ferias/colonia4.jpg";
import imgObstaculos from "../assets/galeria/colonia-ferias/colonia3.jpg";
import imgAcompanhamento from "../assets/galeria/colonia-ferias/colonia7.jpg";
import imgCavaloProprio from "../assets/galeria/colonia-ferias/colonia1.jpg";
import imgColonia from "../assets/galeria/colonia-ferias/colonia5.jpg";

// DADOS
const services = [
  {
    slug: "passeios",
    title: "Passeio a Cavalo",
    desc: "Passeios pela Quinta da Marinha. A escola disponibiliza toque.",
    badges: ["6+ anos", "30–50 min", "≤ 90 kg"],
    img: imgPasseios,
    imgPos: "center 20%", // ver mais topo
  },
  {
    slug: "volteio",
    title: "Aulas de Volteio",
    desc: "Primeiro contacto com o cavalo com exercícios de ginástica para equilíbrio e controlo psicossomático.",
    badges: ["Iniciação"],
    img: imgVolteio,
    imgPos: "center 30%",
  },
  {
    slug: "iniciacao-sela",
    title: "Iniciação à Sela",
    desc: "Bases de segurança e condução. O aluno ganha controlo do cavalo.",
    badges: ["Iniciantes"],
    img: imgIniciacao,
    // sem imgPos -> centra por defeito
  },
  {
    slug: "ensino",
    title: "Aulas de Ensino",
    desc: "Aperfeiçoamento técnico e desenvolvimento do equilíbrio do cavalo.",
    badges: ["Intermédio/Avançado"],
    img: imgEnsino,
    imgPos: "center 20%",
  },
  {
    slug: "obstaculos",
    title: "Aula de Obstáculos",
    desc: "Iniciação e acompanhamento em competição.",
    badges: ["Treino", "Competição"],
    img: imgObstaculos,
  },
  {
    slug: "acompanhamento",
    title: "Acompanhamento em Treinos/Competição",
    desc: "Preparação específica e apoio em prova.",
    badges: ["Sob marcação"],
    img: imgAcompanhamento,
    imgPos: "center 30%",
  },
  {
    slug: "cavalos-proprios",
    title: "Treino com Cavalo Próprio",
    desc: "Plano ajustado ao par cavalo/cavaleiro.",
    badges: ["Plano personalizado"],
    img: imgCavaloProprio,
  },
  {
    slug: "colonias",
    title: "Colónias de Férias",
    desc: "Férias escolares com contacto diário e rotinas do cavalo.",
    badges: ["3.ª–6.ª", "10h–17h"],
    img: imgColonia,
    imgPos: "center 20%",
  },
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const count = services.length;

  // swipe
  const startX = useRef(0);
  const dragging = useRef(false);

  const go = (i) => setIndex((prev) => (i + count) % count);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // setas do teclado
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // swipe handlers
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
      {/* container alinhado com o resto do site */}
      <div className="container mx-auto px-5 py-16 md:py-24 relative">
        {/* Título */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Serviços
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            A escola está aberta das <strong>9h–13h</strong> e{" "}
            <strong>15h–18h</strong>.
          </p>
        </div>

        {/* Viewport do carrossel */}
        <div
          className="relative overflow-hidden"
          onMouseDown={onPointerDown}
          onMouseUp={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {services.map((s) => {
              const hasImg = Boolean(s.img);
              return (
                <div key={s.slug} className="w-full shrink-0 px-2">
                  {/* Cartão largo */}
                  <article className="mx-auto max-w-7xl overflow-hidden rounded-2xl border bg-white shadow-sm">
                    <div
                      className={`grid items-stretch md:h-[360px] ${
                        hasImg ? "md:grid-cols-2" : "md:grid-cols-1"
                      }`}
                    >
                      {/* Texto */}
                      <div className="p-6 sm:p-10 flex items-center">
                        <div>
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
                        </div>
                      </div>

                      {/* Imagem (metade do slide) */}
                      {hasImg && (
                        <div className="relative h-[240px] sm:h-[300px] md:h-auto">
                          <img
                            src={s.img}
                            alt={s.title}
                            className="absolute inset-0 h-full w-full object-cover"
                            style={{
                              objectPosition: s.imgPos || "center center",
                            }}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Setas (desktop) */}
          {count > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Anterior"
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/95 p-3 shadow-lg ring-1 ring-black/5 hover:bg-white"
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
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/95 p-3 shadow-lg ring-1 ring-black/5 hover:bg-white"
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

        {/* Pontos */}
        {count > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* CTA */}
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
