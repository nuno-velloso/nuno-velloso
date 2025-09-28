// src/data/galleryItems.js
// (exemplo – ajusta os imports para as tuas pastas/fotos)

//passeios
import p1 from "../assets/galeria/passeios/1.jpg";
import p2 from "../assets/galeria/passeios/2.jpg";
import p3 from "../assets/galeria/passeios/3.jpg";
import p4 from "../assets/galeria/passeios/4.jpg";
import p5 from "../assets/galeria/passeios/5.jpg";

//concursos
import c1 from "../assets/galeria/concursos/1.jpg";
import c2 from "../assets/galeria/concursos/2.jpg";
import c3 from "../assets/galeria/concursos/3.jpg";
import c4 from "../assets/galeria/concursos/4.jpg";

// ensino
import e1 from "../assets/galeria/aulas-ensino/1.jpg";
import e2 from "../assets/galeria/aulas-ensino/2.jpg";
import e3 from "../assets/galeria/aulas-ensino/3.jpg";

// obstaculos
import o1 from "../assets/galeria/aulas-obstaculos/1.jpeg";
import o2 from "../assets/galeria/aulas-obstaculos/2.jpeg";
import o3 from "../assets/galeria/aulas-obstaculos/3.jpg";
import o4 from "../assets/galeria/aulas-obstaculos/4.jpg";

// colonias
import col1 from "../assets/galeria/colonias-ferias/1.jpg";
import col2 from "../assets/galeria/colonias-ferias/2.jpg";
import col3 from "../assets/galeria/colonias-ferias/3.jpg";
import col4 from "../assets/galeria/colonias-ferias/4.jpg";
import col5 from "../assets/galeria/colonias-ferias/5.jpg";
import col6 from "../assets/galeria/colonias-ferias/6.jpg";
import col7 from "../assets/galeria/colonias-ferias/7.jpg";
import col8 from "../assets/galeria/colonias-ferias/8.jpg";
import col9 from "../assets/galeria/colonias-ferias/9.jpg";
import col10 from "../assets/galeria/colonias-ferias/10.jpg";
import col11 from "../assets/galeria/colonias-ferias/11.jpg";
import col12 from "../assets/galeria/colonias-ferias/12.jpg";
import col13 from "../assets/galeria/colonias-ferias/13.jpg";

// volteio
import v1 from "../assets/galeria/fotos-volteio/1.jpg";
import v2 from "../assets/galeria/fotos-volteio/2.jpg";

export const galleryItems = [
  { src: p1, alt: "Passeios — 1" },
  { src: p2, alt: "Passeios — 2" },
  { src: p3, alt: "Passeios — 3" },
  { src: p4, alt: "Passeios — 4" },
  { src: p5, alt: "Passeios — 5" },
  { src: c1, alt: "Concursos — 1" },
  { src: c2, alt: "Concursos — 2" },
  { src: c3, alt: "Concursos — 3" },
  { src: c4, alt: "Concursos — 4" },
  { src: e1, alt: "Aulas de ensino — 1" },
  { src: e2, alt: "Aulas de ensino — 2" },
  { src: e3, alt: "Aulas de ensino — 3" },
  { src: o1, alt: "Aulas de obstaculo — 1" },
  { src: o2, alt: "Aulas de obstaculo — 2" },
  { src: o3, alt: "Aulas de obstaculo — 3" },
  { src: o4, alt: "Aulas de obstaculo — 4" },
  { src: col1, alt: "Colónias de férias — 1" },
  { src: col2, alt: "Colónias de férias — 2" },
  { src: col3, alt: "Colónias de férias — 3" },
  { src: col4, alt: "Colónias de férias — 4" },
  { src: col5, alt: "Colónias de férias — 5" },
  { src: col6, alt: "Colónias de férias — 6" },
  { src: col7, alt: "Colónias de férias — 7" },
  { src: col8, alt: "Colónias de férias — 8" },
  { src: col9, alt: "Colónias de férias — 9" },
  { src: col10, alt: "Colónias de férias — 10" },
  { src: col11, alt: "Colónias de férias — 11" },
  { src: col12, alt: "Colónias de férias — 12" },
  { src: col13, alt: "Colónias de férias — 13" },
  { src: v1, alt: "Volteio — 1" },
  { src: v2, alt: "Volteio — 2" },
];

// 👇 ESTA LINHA resolve o erro do “does not provide an export named 'default'”
export default galleryItems;
