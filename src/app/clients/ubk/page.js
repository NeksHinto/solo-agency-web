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
          logoSrc="/logos/ubkLogo.webp"
          logoProps={{
            marginTop: "5rem",
            width: "18vw",
            height: "auto",
          }}
          clientInfo="Una marca que transforma el movimiento en acción recurre a la
          dirección creativa y estratégica de Solo Agency para la gestión y
          producción de su campaña 2024."
          services={["Content", "Production", "Styling"]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
