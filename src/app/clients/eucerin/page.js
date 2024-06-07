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
          logoSrc="/logos/eucerinLogo.webp"
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
