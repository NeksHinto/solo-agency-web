"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import BlackBox from "@/components/blackBox";
import { carouselData } from "@/constants/daDesignData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/dadesignLogo.png"
          logoProps={styles.client__page__logo__daDesign}
          clientInfo="Pintando los hogares de cultura, da design recurre a solo agency
          para democratizar su mensaje en redes sociales. Bajo los servicios
          de creative strategy, social media management y content creation
          realizamos una comunicación asertiva para generar una pauta
          publicitaria en Meta ads que luego se traduciría en ventas."
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
