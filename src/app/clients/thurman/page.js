"use client";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/thurmanData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/thurmanLogo.png"
          clientInfo="Marca líder en su rubro, Thurman conquista la Argentina con el
          denim. Buscando fortalecer su presencia en redes, recurre a Solo
          Agency para una intervención 360 gestionando la estrategia
          creativa, sus redes sociales y la pauta publicitaria en todas las
          plataformas digitales. Además de la producción de la campaña AW24
          y su ecommerce."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Production & Styling",
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
