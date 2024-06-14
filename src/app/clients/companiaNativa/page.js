"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/companiaNativaData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/companianativaLogo.png"
          logoProps={styles.client__page__logo}
          shrinkLogo
          clientInfo="Marca referente de mobiliario contemporáneo, recurre a la agencia
          para el desarrollo de piezas audiovisuales orientadas a conectar
          con su audiencia y resaltar el valor agregado en cada uno de sus
          productos y servicios."
          services={["Content"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
      </div>
    </main>
  );
}
