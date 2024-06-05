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
          logoSrc="/logos/pimuxLogo.webp"
          logoProps={{
            marginTop: "6rem",
            width: "16vw",
            height: "auto",
          }}
          clientInfo="Brandbook design development. Brand kit essentials. Haciendo
          énfasis en sus cimientos basados en la arquitectura contemporánea
          desarrollamos el re - branding y la identidad visual de la marca,
          adecuándose al nuevo sistema de consumo, bajo el objetivo de
          acercarla a un nuevo nicho de arquitectos jóvenes."
          services={["Branding"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent
            key={data.title}
            carousel={false}
            branding={true}
            data={data}
          />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
