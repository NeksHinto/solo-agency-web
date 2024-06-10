"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import BlackBox from "@/components/blackBox";
import { carouselData } from "@/constants/cristhoData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

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
          logoSrc="/images/logos/cristhoLogo.webp"
          clientInfo="Una marca que resignifica los valores del boho chic recurre a la
          dirección creativa y estratégica de Solo Agency para la gestión y
          producción de su campaña 2022. Junto a diseño gráfico y
          comunicación estratégica reforzamos sus canales digitales para los
          nuevos desafíos del mercado."
          services={["Content"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
