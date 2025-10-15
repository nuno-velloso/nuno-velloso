// src/components/ServicesGrid.jsx
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
    title: "Aulas de Iniciação à Sela",
    desc: "O aluno aprende a ter controlo do cavalo e as bases de segurança e condução.",
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
    desc: "Treino de iniciação e acompanhamento posterior em competição.",
    badges: ["Treino", "Competição"],
  },
  {
    slug: "acompanhamento",
    title: "Acompanhamento em Treinos e Competição",
    desc: "Preparação específica, reconhecimento de percurso e apoio em prova.",
    badges: ["Sob marcação"],
  },
  {
    slug: "cavalos-proprios",
    title: "Treino de Alunos com Cavalos Próprios",
    desc: "Planos ajustados ao par cavalo/cavaleiro, com objetivos definidos.",
    badges: ["Plano personalizado"],
  },
  {
    slug: "colonias",
    title: "Colónias de Férias",
    desc: "Férias escolares: limpeza, aparelhar, alimentar e treino diário. Espaço para brincar e fazer amizades.",
    badges: ["3.ª–6.ª", "10h–17h"],
  },
];

export default function ServicesGrid() {
  return (
    <section id="servicos" className="bg-gray-50 border-t scroll-mt-20">
      <div className="container mx-auto px-5 py-16 md:py-24">
        {/* Título (sem horários) */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Serviços
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>

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
          ))}
        </div>

        {/* CTA único no fim */}
        <div className="mt-10 md:mt-12 text-center">
          <Link
            to="/contactos"
            className="inline-flex items-center rounded bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
          >
            Fale connosco
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Dúvidas ou marcações? Estamos deste lado.
          </p>
        </div>
      </div>
    </section>
  );
}
