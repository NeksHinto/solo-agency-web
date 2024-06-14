"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData, gridData } from "@/constants/dsmenData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/dsmenLogo.png"
          logoProps={styles.client__page__logo}
          clientInfo="Reconocida marca de moda Argentina recurre a nuestro servicio 360.
          Desde creative strategy, social media management, content creation
          y paid media (Meta ads) acompañamos en todos los desafíos que
          comprenden comunicación visual y digital."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Paid Media",
          ]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={true} data={data} />
        ))}
      </div>
    </main>
  );
}
