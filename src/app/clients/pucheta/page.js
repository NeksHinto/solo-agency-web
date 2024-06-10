"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";

import BlackBox from "@/app/components/blackBox";
import { carouselData } from "./carouselData";
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
          logosrc="/images/logos/puchetaLogo.webp"
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
