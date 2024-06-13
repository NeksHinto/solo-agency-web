"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import BlackBox from "@/components/blackBox";
import { carouselData } from "@/constants/terrazasData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/terrazasdelosandesLogo.png"
          logoProps={styles.client__page__logo__terrazas}
          clientInfo="Solo Agency ha tenido el rol de registrar el evento de lanzamiento
          de su línea de vinos reserva, elaborando piezas fotográficas y
          audiovisuales del mismo."
          services={["Content"]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
