"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import BlackBox from "@/components/blackBox";
import { carouselData, gridData } from "@/constants/faitfulData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/faitfulLogo.png"
          logoProps={styles.client__page__logo__faitful}
          clientInfo="Reconocido vivero con más de 10 años de trayectoria recurre a
          nuestro servicio 360. Desde creative strategy, social media
          management, content creation y paid media acompañamos en todos los
          desafíos que comprenden comunicación visual y digital."
          services={["Creative Strategy", "Social Media", "Paid Media"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={true} data={data} />
        ))}

        {gridData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
        <BlackBox />
      </div>
    </main>
  );
}
