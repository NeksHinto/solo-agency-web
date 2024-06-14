"use client";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/daDesignData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/dadesignLogo.png"
          logoProps={styles.client__page__logo}
          shrinkLogo
          clientInfo="Pintando los hogares de cultura, da design recurre a solo agency
          para democratizar su mensaje en redes sociales. Bajo los servicios
          de creative strategy, social media management y content creation
          realizamos una comunicación asertiva para generar una pauta
          publicitaria en Meta ads que luego se traduciría en ventas."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Paid Media",
          ]}
        />

        {carouselData.map((data) => (
          <ClientPageContent
            key={data.title}
            carousel={true}
            data={data}
            hqVideos
          />
        ))}
      </div>
    </main>
  );
}
