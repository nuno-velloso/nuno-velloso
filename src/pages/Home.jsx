// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo/logo.png";
import heroFallback from "../assets/fotos/main.jpg";

import ServicesCarousel from "../components/ServicesCarousel";
import EventGalleries from "../components/EventGalleries";

/* ===== HERO: procura “picadeiros*” e usa fotos 1..4 (se existirem) ===== */
const heroModsAny = import.meta.glob(
  "../assets/**/picadeiros*/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true }
);
const heroSources = Object.entries(heroModsAny)
  .filter(([p]) => /[/\\](1|2|3|4)\.(jpg|jpeg|png)$/i.test(p))
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  )
  .map(([, mod]) => mod?.default)
  .filter(Boolean);

/* ===== pega as imagens 5,9,10 da pasta nuno-velloso ===== */
function getNunoImages() {
  const mods = import.meta.glob(
    "../assets/galeria/nuno-velloso/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    { eager: true }
  );
  const entries = Object.entries(mods).map(([path, mod]) => {
    const m = path.match(/[/\\](\d+)\.(jpg|jpeg|png)$/i);
    return m ? { id: Number(m[1]), url: mod?.default } : null;
  });
  const byId = new Map(entries.filter(Boolean).map((o) => [o.id, o.url]));
  return { img5: byId.get(5), img9: byId.get(9), img10: byId.get(10) };
}

export default function Home() {
  /* ---------------- HERO (sem setas) ---------------- */
  const slides =
    heroSources.length > 0
      ? heroSources.map((src, i) => ({
          src,
          alt: `Quinta da Marinha — picadeiro e trilhos (${i + 1}/${
            heroSources.length
          })`,
        }))
      : [{ src: heroFallback, alt: "Centro Hípico - imagem de destaque" }];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  /* ---------------- Imagens do Nuno ---------------- */
  const { img5, img9, img10 } = getNunoImages();

  return (
    <>
      {/* HERO */}
      <section className="relative h-[calc(100svh-64px)] md:h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding={i === 0 ? "sync" : "async"}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex h-full items-center justify-center px-5">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Quinta da Marinha
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed md:leading-8">
              O centro hípico da Quinta da Marinha é um lugar privilegiado,
              próximo do Guincho, com dois restaurantes, dois picadeiros
              cobertos, três picadeiros de guia cobertos e quatro picadeiros
              exteriores.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#servicos"
                className="inline-flex items-center rounded bg-white px-5 py-2 text-gray-900 hover:bg-gray-100"
              >
                Ver serviços
              </a>
              <Link
                to="/contactos"
                className="inline-flex items-center rounded bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
              >
                Vem até nós
              </Link>
            </div>
          </div>
        </div>
        {slides.length > 1 && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === idx ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* LOGO */}
      <section aria-label="Marca" className="bg-white mt-20 md:mt-28">
        <div className="container mx-auto px-5 py-14 md:py-20 flex items-center justify-center">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44">
            <img
              src={logo}
              alt="Escola de Equitação Nuno Velloso — logótipo"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* INSTRUTOR (Nuno) – fotos menores, texto maior e com largura limitada */}
      <section className="bg-white">
        <div className="container mx-auto px-5 mt-4 md:mt-6">
          <h2 className="text-left text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-8 md:mb-12">
            O nosso instrutor
          </h2>
        </div>

        <div className="container mx-auto px-5 pb-6 md:pb-10 space-y-14 md:space-y-20">
          {/* Bloco 1: imagem à esquerda (foto 5) */}
          <article className="md:flex md:items-center md:gap-12">
            {img5 && (
              <div className="md:w-4/12 w-full mb-6 md:mb-0">
                <div className="mx-auto max-w-[420px] aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={img5}
                    alt="Nuno Velloso — momentos"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            )}
            <div className="md:w-8/12 w-full text-gray-700">
              <h3 className="sr-only">Biografia — Parte 1</h3>
              <p className="text-lg md:text-2xl lg:text-[26px] leading-relaxed md:leading-9 lg:leading-9 md:max-w-[700px]">
                Professor de equitação credenciado pela FEP desde 1980 e
                proprietário da Escola de Equitação da Quinta da Marinha até
                1995. Diretor do Hipódromo Manuel Possolo de 2000 a 2005.
                Atualmente, proprietário da Escola de Equitação Nuno Velloso,
                situada na Quinta da Marinha.
              </p>
            </div>
          </article>

          {/* Bloco 2: imagem à direita (foto 9) */}
          <article className="md:flex md:flex-row-reverse md:items-center md:gap-12">
            {img9 && (
              <div className="md:w-4/12 w-full mb-6 md:mb-0">
                <div className="mx-auto max-w-[420px] aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={img9}
                    alt="Nuno Velloso — competições"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            )}
            <div className="md:w-8/12 w-full text-gray-700">
              <h3 className="sr-only">Biografia — Parte 2</h3>
              <p className="text-lg md:text-2xl lg:text-[26px] leading-relaxed md:leading-9 lg:leading-9 md:max-w-[700px]">
                Cavaleiro de Obstáculos, tendo concursado até 2020. Vice-Campeão
                Nacional de Veteranos (2005) e Campeão Nacional de Veteranos
                (2006), com diversas vitórias em provas nacionais e
                internacionais, destacando-se: Grande Prémio de Alenquer (2001),
                Grande Prémio de Santarém e Seis Barras de Santarém.
              </p>
            </div>
          </article>

          {/* Bloco 3: imagem à esquerda (foto 10) */}
          <article className="md:flex md:items-center md:gap-12">
            {img10 && (
              <div className="md:w-4/12 w-full mb-6 md:mb-0">
                <div className="mx-auto max-w-[420px] aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={img10}
                    alt="Nuno Velloso — alunos e resultados"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            )}
            <div className="md:w-8/12 w-full text-gray-700">
              <h3 className="sr-only">Biografia — Parte 3</h3>
              <p className="text-lg md:text-2xl lg:text-[26px] leading-relaxed md:leading-9 lg:leading-9 md:max-w-[700px]">
                Como instrutor, orientou vários alunos que alcançaram pódios em
                Campeonatos Nacionais, incluindo: 1.º lugar de Juvenis (2012) —
                Sydney Rous; Vice-Campeã Nacional de Iniciados (1991) — Filipa
                Velloso; Medalha de Bronze (1990) — José Bueri Antero; 3.º lugar
                Júnior (1993) — Paulo Nóbrega Lopes; Medalha de Bronze Juvenis
                (1993) — Filipa Velloso; Medalha de Bronze Júnior (2009) —
                Teresa Fortunato; além de inúmeras vitórias e classificações ao
                longo dos anos.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SERVIÇOS */}
      <ServicesCarousel />

      {/* GALERIA */}
      <section id="galeria" className="px-5 py-12 md:py-16 bg-white">
        <EventGalleries limit={3} />
      </section>
    </>
  );
}
