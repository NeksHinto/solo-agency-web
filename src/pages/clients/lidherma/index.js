"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import BlackBox from "@/components/blackBox";
import { carouselData } from "@/constants/lidhermaData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

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
          logoSrc="/images/logos/lidhermaLogo.webp"
          logoProps={styles.client__page__logo__lidherma}
          clientInfo="Tras el lanzamiento de sus nuevas bases “SKIN COLOUR BB CREAM”
          Realizamos todo el contenido audiovisual nacional para todos sus
          canales de comunicación."
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
