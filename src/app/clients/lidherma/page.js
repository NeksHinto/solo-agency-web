"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/lidhermaData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/lidhermaLogo.png"
          logoProps={styles.client__page__logo}
          clientInfo="Tras el lanzamiento de sus nuevas bases “SKIN COLOUR BB CREAM”
          Realizamos todo el contenido audiovisual nacional para todos sus
          canales de comunicación."
          services={["Content"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
      </div>
    </main>
  );
}
