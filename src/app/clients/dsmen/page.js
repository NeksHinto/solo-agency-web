"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";

import BlackBox from "@/app/components/blackBox";
import { carouselData, gridData } from "./carouselData";
import ClientPageContent from "@/app/components/clientPageContent";
import ClientHeader from "@/app/components/clientHeader";

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
          logosrc="/images/logos/dsmenLogo.webp"
          clientInfo="Reconocida marca de moda Argentina recurre a nuestro servicio 360.
          Desde creative strategy, social media management, content creation
          y paid media (Meta ads) acompañamos en todos los desafíos que
          comprenden comunicación visual y digital."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Paid Media",
          ]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={true} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
