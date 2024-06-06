"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";

import BlackBox from "@/app/components/blackBox";
import { carouselData } from "./carouselData";
import ClientHeader from "@/app/components/clientHeader";
import ClientPageContent from "@/app/components/clientPageContent";

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
          logoSrc="/logos/fernandoRamosLogo.webp"
          logoProps={{
            marginTop: "3rem",
          }}
          clientInfo="Cementando sus raíces en 1920, Sassone más que una empresa, nace
          como una puerta hacia el mundo, conectando culturas. Siendo
          empresa líder en despachos, Sassone busca una nueva imagen que
          comunique su confiabilidad, experiencia y sobre todo la
          grandilocuencia que esta ejerce en el rubro. Es así como Solo
          Agency, le propone una nueva identidad de marca."
          services={["Branding"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} branding={true} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
