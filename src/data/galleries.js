// src/data/galleries.js

// Converte o objeto de módulos em array de URLs ordenadas
function toArray(mods) {
  return Object.entries(mods)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    )
    .map(([, m]) => m.default);
}

// ⬇️ Usa APENAS literais no glob (nada de variáveis aqui)
const gColonias = toArray(
  import.meta.glob("../assets/galeria/colonias-ferias/*.{jpg,jpeg,png}", {
    eager: true,
  })
);
const gPasseios = toArray(
  import.meta.glob("../assets/galeria/passeios/*.{jpg,jpeg,png}", {
    eager: true,
  })
);
const gConcursos = toArray(
  import.meta.glob("../assets/galeria/concursos/*.{jpg,jpeg,png}", {
    eager: true,
  })
);
// podes acrescentar mais linhas se tiveres essas pastas, p.ex.:
// const gNuno      = toArray(import.meta.glob("../assets/galeria/nuno-velloso/*.{jpg,jpeg,png}",   { eager: true }));

export const galleries = [
  gColonias.length && {
    eventSlug: "colonias-ferias",
    eventTitle: "Colónias de Férias",
    topics: [
      {
        id: "momentos",
        label: "Momentos",
        alt: "Momentos das colónias.",
        images: gColonias,
      },
    ],
  },
  gPasseios.length && {
    eventSlug: "passeios",
    eventTitle: "Passeios",
    topics: [
      {
        id: "trilhos",
        label: "Trilhos e passeios",
        alt: "Passeios.",
        images: gPasseios,
      },
    ],
  },
  gConcursos.length && {
    eventSlug: "concursos",
    eventTitle: "Concursos",
    topics: [
      {
        id: "provas",
        label: "Provas",
        alt: "Momentos de concursos.",
        images: gConcursos,
      },
    ],
  },
  // gNuno.length && {
  //   eventSlug: "nuno-velloso",
  //   eventTitle: "Equipa Nuno & Filipa",
  //   topics: [{ id: "equipa", label: "Equipa", alt: "Equipa.", images: gNuno }],
  // },
].filter(Boolean);
