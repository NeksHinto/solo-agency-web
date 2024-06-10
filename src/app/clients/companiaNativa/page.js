"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";

import BlackBox from "@/app/components/blackBox";
import { carouselData } from "./carouselData";
import ClientHeader from "@/app/components/clientHeader";
import ClientPageContent from "@/app/components/clientPageContent";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logosrc="/images/logos/companianativaLogo.webp"
          logoProps={styles.client__page__logo__companiaNativa}
          clientInfo="Marca referente de mobiliario contemporáneo, recurre a la agencia
          para el desarrollo de piezas audiovisuales orientadas a conectar
          con su audiencia y resaltar el valor agregado en cada uno de sus
          productos y servicios."
          services={["Content"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
