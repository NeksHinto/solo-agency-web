"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";

import BlackBox from "@/app/components/blackBox";
import { carouselData, gridData } from "./carouselData";
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
          logoSrc="/images/logos/faitfulLogo.webp"
          logoProps={styles.client__page__logo__faitful}
          clientInfo="Reconocido vivero con más de 10 años de trayectoria recurre a
          nuestro servicio 360. Desde creative strategy, social media
          management, content creation y paid media acompañamos en todos los
          desafíos que comprenden comunicación visual y digital."
          services={["Creative Strategy", "Social Media", "Paid Media"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={true} data={data} />
        ))}

        {gridData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
        <BlackBox />
      </div>
    </main>
  );
}
