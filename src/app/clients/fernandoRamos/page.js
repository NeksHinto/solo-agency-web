"use client";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/fernandoRamosData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/fernandoRamosLogo.png"
          logoProps={styles.client__page__logo}
          shrinkLogo
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
      </div>
    </main>
  );
}
