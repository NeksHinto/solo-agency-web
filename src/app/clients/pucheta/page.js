"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/puchetaData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/puchetaLogo.png"
          clientInfo="Marca referente del diseño emergente argentino. Desde creative
          strategy, social media management y content creation acompañamos a
          la marca en todos los desafíos que comprenden comunicación visual
          y digital."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Digital Branding",
          ]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={true} data={data} />
        ))}
      </div>
    </main>
  );
}
