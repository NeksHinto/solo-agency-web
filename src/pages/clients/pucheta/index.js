"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import BlackBox from "@/components/blackBox";
import { carouselData } from "@/constants/puchetaData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

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
          logoSrc="/images/logos/puchetaLogo.webp"
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

        <BlackBox />
      </div>
    </main>
  );
}
