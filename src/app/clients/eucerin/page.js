"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import BlackBox from "@/components/blackBox";
import { carouselData } from "@/constants/eucerinData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

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
          logoSrc="/images/logos/eucerinLogo.png"
          logoProps={styles.client__page__logo__eucerin}
          clientInfo="Tras el lanzamiento de su protector solar “Hydro fluid” Realizamos
          toda la cobertura audiovisual del evento a nivel nacional."
          services={["Content"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent
            key={data.title}
            carousel={false}
            branding={true}
            data={data}
            customProps={styles.client__grid__eucerin}
          />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
