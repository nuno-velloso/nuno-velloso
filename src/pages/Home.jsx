// src/pages/Home.jsx
import { Link } from "react-router-dom";

import hero from "../assets/fotos/main.jpg";
import instrutor1 from "../assets/instrutores/instrutor1.jpg";
import instrutor2 from "../assets/instrutores/instrutor2.jpg";

import ServicesCarousel from "../components/ServicesCarousel";

export default function Home() {
  return (
    <>
      {/* =================== HERO =================== */}
      {/* Altura = janela - header (64px mobile, 80px desktop) */}
      <section className="relative h-[calc(100svh-64px)] md:h-[calc(100vh-80px)]">
        {/* Imagem de fundo */}
        <img
          src={hero}
          alt="Centro Hípico - imagem de destaque"
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Conteúdo centrado */}
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
      </section>

      {/* =================== INSTRUTORES =================== */}
      <section className="text-gray-700">
        {/* Nuno */}
        <div className="container mx-auto px-5 py-16 md:py-24 md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 w-full mb-10 md:mb-0">
            <div className="mx-auto w-full max-w-[520px] aspect-square md:aspect-[4/5] overflow-hidden rounded">
              <img
                src={instrutor1}
                alt="Nuno Velloso"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              Nuno Velloso
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 text-gray-700 max-w-2xl">
              Professor de equitação credenciado pela FEP desde 1980. Diretor do
              Hipódromo Manuel Possolo (2000–2005). Cavaleiro de Obstáculos até
              2020, Vice-Campeão Nacional de Veteranos (2005) e Campeão (2006).
              Experiência vasta em iniciação, aperfeiçoamento e competição.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Filipa (imagem à esquerda em desktop) */}
        <div className="container mx-auto px-5 py-16 md:py-24 md:flex md:flex-row-reverse md:items-center md:gap-12">
          <div className="md:w-1/2 w-full mb-10 md:mb-0">
            <div className="mx-auto w-full max-w-[520px] aspect-square md:aspect-[4/5] overflow-hidden rounded">
              <img
                src={instrutor2}
                alt="Filipa Velloso"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              Filipa Velloso
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 text-gray-700 max-w-2xl">
              Vice-Campeã Nacional de Iniciados (1991) e múltiplas
              classificações em provas nacionais. Foco na evolução técnica e no
              bem-estar do cavalo e do cavaleiro, com uma abordagem pedagógica e
              segura.
            </p>
          </div>
        </div>
      </section>

      {/* =================== SERVIÇOS (CAROUSEL) =================== */}
      <ServicesCarousel />
    </>
  );
}
