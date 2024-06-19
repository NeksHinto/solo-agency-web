"use client";
import styles from "@/styles/styles.module.css";
import React from "react";

import { gridData } from "@/constants/aiaData";
import ClientHeader from "@/components/clientHeader";
import ClientPageContent from "@/components/clientPageContent";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/aiaLogo.png"
          clientInfo="Junto a la marca realizamos la dirección estratégica para el desarrollo de editoriales para redes sociales, reflejando los valores de simplicidad, movimiento y calidad, aspectos claves de una mujer contemporánea y joven, el público meta planteado con esta desarrollo."
          services={["Content"]}
        />

        {gridData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
      </div>
    </main>
  );
}
