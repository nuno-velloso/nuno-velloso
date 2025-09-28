// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo/logo.png";
import ServicesCarousel from "../components/ServicesCarousel";
import SimpleGallery from "../components/SimpleGallery"; // <- este fica

// ... imports das imagens do hero (1..8) ...

/* =========================
   HERO (imports diretos 1..4)
   ========================= */
import hero1 from "../assets/galeria/picadeiros-e-quinta/1.jpg";
import hero2 from "../assets/galeria/picadeiros-e-quinta/2.jpg";
import hero3 from "../assets/galeria/picadeiros-e-quinta/3.jpg";
import hero4 from "../assets/galeria/picadeiros-e-quinta/4.jpg";
import hero5 from "../assets/galeria/picadeiros-e-quinta/5.jpg";
import hero6 from "../assets/galeria/picadeiros-e-quinta/6.jpg";
import hero7 from "../assets/galeria/picadeiros-e-quinta/7.jpg";
import hero8 from "../assets/galeria/picadeiros-e-quinta/8.jpg";

const heroSlides = [
  { src: hero1, alt: "Quinta da Marinha — 1/8" },
  { src: hero2, alt: "Quinta da Marinha — 2/8" },
  { src: hero3, alt: "Quinta da Marinha — 3/8" },
  { src: hero4, alt: "Quinta da Marinha — 4/8" },
  { src: hero5, alt: "Quinta da Marinha — 5/8" },
  { src: hero6, alt: "Quinta da Marinha — 6/8" },
  { src: hero7, alt: "Quinta da Marinha — 7/8" },
  { src: hero8, alt: "Quinta da Marinha — 8/8" },
];

/* =========================
   BIO (imports diretos 5,9,10)
   ========================= */
import nuno5 from "../assets/galeria/nuno-velloso/5.jpg";
import nuno9 from "../assets/galeria/nuno-velloso/9.jpg";
import nuno10 from "../assets/galeria/nuno-velloso/10.jpg";

const bioSlides = [
  { src: nuno5, alt: "Nuno Velloso — foto 1" },
  { src: nuno9, alt: "Nuno Velloso — foto 2" },
  { src: nuno10, alt: "Nuno Velloso — foto 3" },
];

export default function Home() {
  /* =================== HERO autoplay =================== */
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setHeroIdx((i) => (i + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  /* =================== BIO slideshow (direita) =================== */
  const [bioIdx, setBioIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setBioIdx((i) => (i + 1) % bioSlides.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* =================== HERO =================== */}
      <section className="relative h-[calc(100svh-64px)] md:h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          {heroSlides.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
                i === heroIdx ? "opacity-100" : "opacity-0"
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
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === heroIdx ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* =================== LOGO =================== */}
      <section aria-label="Marca" className="bg-white mt-16 md:mt-24">
        <div className="container mx-auto px-5 py-12 md:py-16 flex items-center justify-center">
          <div className="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40">
            <img
              src={logo}
              alt="Escola de Equitação Nuno Velloso — logótipo"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* =================== BIO: texto à esquerda + slideshow à direita =================== */}
      <section className="bg-white">
        <div className="container mx-auto px-5 py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Texto (esquerda) */}
          <div className="space-y-6 md:space-y-7">
            <p className="text-base md:text-lg text-gray-700 leading-7 md:leading-8">
              Professor de equitação credenciado pela FEP desde 1980 e
              proprietário da Escola de Equitação da Quinta da Marinha até 1995.
              Diretor do Hipódromo Manuel Possolo de 2000 a 2005. Atualmente,
              proprietário da Escola de Equitação Nuno Velloso, situada na
              Quinta da Marinha.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-7 md:leading-8">
              Cavaleiro de Obstáculos, tendo concursado até 2020. Vice-Campeão
              Nacional de Veteranos (2005) e Campeão Nacional de Veteranos
              (2006), com diversas vitórias em provas nacionais e
              internacionais, destacando-se: Grande Prémio de Alenquer (2001),
              Grande Prémio de Santarém e Seis Barras de Santarém.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-7 md:leading-8">
              Como instrutor, orientou vários alunos que alcançaram pódios em
              Campeonatos Nacionais, incluindo: 1.º lugar de Juvenis (2012) —
              Sydney Rous; Vice-Campeã Nacional de Iniciados (1991) — Filipa
              Velloso; Medalha de Bronze (1990) — José Bueri Antero; 3.º lugar
              Júnior (1993) — Paulo Nóbrega Lopes; Medalha de Bronze Juvenis
              (1993) — Filipa Velloso; Medalha de Bronze Júnior (2009) — Teresa
              Fortunato; além de inúmeras vitórias e classificações ao longo dos
              anos.
            </p>
          </div>

          {/* Slideshow (direita) */}
          <div className="relative w-full max-w-[520px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
            {bioSlides.map((s, i) => (
              <img
                key={i}
                src={s.src}
                alt={s.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === bioIdx ? "opacity-100" : "opacity-0"
                }`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding={i === 0 ? "sync" : "async"}
              />
            ))}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {bioSlides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === bioIdx ? "bg-white" : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================== SERVIÇOS =================== */}
      <section id="servicos">
        <ServicesCarousel />
      </section>

      {/* =================== GALERIA (masonry + lightbox) =================== */}
      <section id="galeria" className="px-5 py-12 md:py-16 bg-white">
        <div className="container mx-auto">
          {/* Sem props -> usa automaticamente src/data/galleryItems.js */}
          <SimpleGallery initial={24} step={24} />
        </div>
      </section>
    </>
  );
}
