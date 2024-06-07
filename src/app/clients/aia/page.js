"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";

import BlackBox from "@/app/components/blackBox";
import { carouselData, gridData } from "./carouselData";
import ClientHeader from "@/app/components/clientHeader";
import ClientPageContent from "@/app/components/clientPageContent";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/logos/aiaLogo.webp"
          logoProps={styles.client__page__logo__aia}
          clientInfo="Junto a la marca realizamos la dirección estratégica para el desarrollo de editoriales para redes sociales, reflejando los valores de simplicidad, movimiento y calidad, aspectos claves de una mujer contemporánea y joven, el público meta planteado con esta desarrollo."
          services={["Content"]}
        />

        {gridData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
