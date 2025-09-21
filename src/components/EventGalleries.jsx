// src/components/EventGalleries.jsx
import { useMemo, useState } from "react";
import GalleryTile from "./GalleryTile";
import Lightbox from "./Lightbox";

import { galleries } from "../data/galleries";

export default function EventGalleries({ limit }) {
  // achata dados -> tiles
  const tiles = useMemo(() => {
    const list = [];
    for (const g of galleries) {
      for (const t of g.topics) {
        if (!t.images?.length) continue;
        list.push({
          cover: t.images[0],
          images: t.images,
          title: t.label,
          subtitle: g.eventTitle,
        });
      }
    }
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [limit]);

  // estado do lightbox
  const [lb, setLb] = useState({
    open: false,
    images: [],
    startIndex: 0,
    title: "",
  });

  return (
    <>
      <div className="container mx-auto">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Galeria</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <GalleryTile
              key={`${t.subtitle}-${t.title}-${i}`}
              cover={t.cover}
              title={t.title}
              subtitle={t.subtitle}
              onOpen={() =>
                setLb({
                  open: true,
                  images: t.images,
                  startIndex: 0,
                  title: `${t.subtitle} — ${t.title}`,
                })
              }
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={lb.open}
        images={lb.images}
        startIndex={lb.startIndex}
        title={lb.title}
        onClose={() =>
          setLb({ open: false, images: [], startIndex: 0, title: "" })
        }
      />
    </>
  );
}
