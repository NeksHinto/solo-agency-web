"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/terrazasData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/terrazasdelosandesLogo.png"
          clientInfo="Solo Agency ha tenido el rol de registrar el evento de lanzamiento
          de su línea de vinos reserva, elaborando piezas fotográficas y
          audiovisuales del mismo."
          services={["Content"]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
      </div>
    </main>
  );
}
