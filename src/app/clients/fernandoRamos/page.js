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
          clientInfo='Fernando Ramos recurre a nosotros bajo el lema "más que un espacio, un hogar". Desarrollamos toda su identidad de marca, branding y ADN visual.'
          services={["Branding"]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} branding={true} data={data} />
        ))}
      </div>
    </main>
  );
}
