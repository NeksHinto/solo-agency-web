"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";
import Script from "next/script";
import BlackBox from "@/app/components/blackBox";
import { carouselData, gridData } from "./carouselData";
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
      <Script type="text/javascript" src="/scripts/lightbox.js" />
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/logos/thurmanLogo.webp"
          clientInfo="Marca líder en su rubro, Thurman conquista la Argentina con el
          denim. Buscando fortalecer su presencia en redes, recurre a Solo
          Agency para una intervención 360 gestionando la estrategia
          creativa, sus redes sociales y la pauta publicitaria en todas las
          plataformas digitales. Además de la producción de la campaña AW24
          y su ecommerce."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Production & Styling",
            "Paid Media",
          ]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={true} data={data} />
        ))}

        {gridData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
