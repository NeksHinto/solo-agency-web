"use client";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/ubkData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/ubkLogo.png"
          logoProps={styles.client__page__logo}
          clientInfo="Una marca que transforma el movimiento en acción recurre a la
          dirección creativa y estratégica de Solo Agency para la gestión y
          producción de su campaña 2024."
          services={["Content", "Production", "Styling"]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
      </div>
    </main>
  );
}
