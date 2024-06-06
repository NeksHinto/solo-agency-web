"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";

import BlackBox from "@/app/components/blackBox";
import { carouselData, gridData } from "./carouselData";
import ClientPageContent from "@/app/components/clientPageContent";
import ClientHeader from "@/app/components/clientHeader";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/logos/lagouardeLogo.webp"
          clientInfo="Brandbook design development. Brand kit essentials. Haciendo
          énfasis en sus cimientos basados en la gastronomía de lujo
          desarrollamos el re-branding y la identidad visual de la marca.
          Social media management. Junto a diseño gráfico y comunicación
          estratégica reforzamos sus canales digitales para los nuevos
          desafíos del mercado."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Branding Design",
          ]}
        />

        {gridData.map((data) => (
          <ClientPageContent
            key={data.title}
            carousel={false}
            branding={true}
            data={data}
          />
        ))}

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={true} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
