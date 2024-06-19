"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/elGourmetData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/elgourmetLogo.png"
          clientInfo="De la idea a la realidad llevamos a cabo la creatividad y
          producción de la campaña digital gastronómica de 'ruta 40'."
          services={["Content", "Creative Startegy"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent
            key={data.title}
            carousel={false}
            branding={true}
            data={data}
          />
        ))}
      </div>
    </main>
  );
}
