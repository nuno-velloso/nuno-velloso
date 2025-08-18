import { Link } from "react-router-dom";
import hero from "../assets/fotos/main.jpg";
import instrutor1 from "../assets/instrutores/instrutor1.jpg";
import instrutor2 from "../assets/instrutores/instrutor2.jpg";

export default function Home() {
  return (
    <>
      {/* =================== HERO =================== */}
      <section className="relative h-[calc(100svh-64px)] md:h-[calc(100vh-80px)]">
        <img
          src={hero}
          alt="Centro Hípico - imagem de destaque"
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex h-full items-center justify-center px-5">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Quinta da Marinha
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed md:leading-8">
              O centro hípico da Quinta da Marinha é um lugar privilegiado
              situado nos arredores de Cascais perto da praia do guincho. Tem
              dois restaurantes, dois picadeiros cobertos, três picadeiros de
              guia cobertos e quatro picadeiros exteriores.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/servicos"
                className="inline-flex items-center rounded bg-white px-5 py-2 text-gray-900 hover:bg-gray-100"
              >
                Ver serviços
              </Link>
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

      {/* ================== INSTRUTORES ================== */}
      <section className="text-gray-600 body-font">
        {/* Instrutor 1 (texto à esquerda / foto à direita) */}
        <div className="container mx-auto flex px-5 py-16 md:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
            <h2 className="title-font text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Nuno Velloso
            </h2>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 text-gray-700 max-w-2xl">
              Professor de equitação credenciado pela FEP desde 1980,
              proprietário da Escola Equitação da Quinta da Marinha até 1995.
              Director do Hipódromo Manuel Possolo de 2000 até 2005. Atualmente
              propriatário da Escola de Equitação Nuno Velloso situada na Quinta
              da Marinha. Cavaleiro de Obstáculos, tendo concursado até 2020.
              Vice- Campeão Nacional de Veteranos em 2005 e Campeão Nacional de
              Veteranos em 2006, além de diversas vitórias em provas nacionais e
              internacionais, sendo de destacar: Grande prémio de Alenquer em
              2001, Grande prémio de Santarém, Seis Barras de Santarém. Como
              Instrutor teve vários alunos no Pódio em Campeonatos Nacionais,
              sendo de destacar um 1° lugar de juvenis em 2012 - Sydney Rous.
            </p>
          </div>

          {/* Foto mais “quadrada” */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="mx-auto w-full max-w-[520px] aspect-square md:aspect-[4/5] overflow-hidden rounded">
              <img
                src={instrutor1}
                alt="Nuno Velloso"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Instrutora (FOTO À ESQUERDA / texto à direita) */}
        <div className="container mx-auto flex px-5 py-16 md:py-24 md:flex-row flex-col items-center">
          {/* Foto mais “quadrada” à esquerda */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="mx-auto w-full max-w-[520px] aspect-square md:aspect-[4/5] overflow-hidden rounded">
              <img
                src={instrutor2}
                alt="Filipa Velloso"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="title-font text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Filipa Velloso
            </h2>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 text-gray-700 max-w-2xl">
              Vice- Campeã Nacional de iniciados em 1991 — Filipa Velloso;
              medalha de bronze 1990 — José Bueri Antero; 3.º lugar júnior —
              Paulo Nóbrega Lopes (1993); medalha de bronze juvenis — Filipa
              Velloso (1993); medalha de bronze júnior — Teresa Fortunato
              (2009), entre numerosas vitórias e classificações ao longo dos
              anos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
