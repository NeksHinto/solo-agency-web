"use client";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/celebreInCulinaData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/celebreinculinaLogo.png"
          clientInfo="Producción audiovisual y estrategia de contenido gastronómico
          mensual para audiencia de redes sociales y streaming, instagram &
          Youtube"
          services={["Content"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
      </div>
    </main>
  );
}
