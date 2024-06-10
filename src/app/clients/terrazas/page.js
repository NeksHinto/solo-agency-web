"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";

import BlackBox from "@/app/components/blackBox";
import { carouselData } from "./carouselData";
import ClientPageContent from "@/app/components/clientPageContent";
import ClientHeader from "@/app/components/clientHeader";

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
          logosrc="/images/logos/terrazasdelosandesLogo.webp"
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
