"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import BlackBox from "@/components/blackBox";
import { carouselData } from "@/constants/pimuxData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/pimuxLogo.webp"
          logoProps={styles.client__page__logo__pimux}
          clientInfo="Brandbook design development. Brand kit essentials. Haciendo
          énfasis en sus cimientos basados en la arquitectura contemporánea
          desarrollamos el re - branding y la identidad visual de la marca,
          adecuándose al nuevo sistema de consumo, bajo el objetivo de
          acercarla a un nuevo nicho de arquitectos jóvenes."
          services={["Branding"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent
            key={data.title}
            carousel={false}
            branding={true}
            data={data}
          />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
