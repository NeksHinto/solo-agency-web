"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/eucerinData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/eucerinLogo.png"
          logoProps={styles.client__page__logo}
          clientInfo="Tras el lanzamiento de su protector solar “Hydro fluid” Realizamos
          toda la cobertura audiovisual del evento a nivel nacional."
          services={["Content"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent
            key={data.title}
            carousel={false}
            branding={true}
            data={data}
            customProps={styles.client__grid__eucerin}
          />
        ))}
      </div>
    </main>
  );
}
