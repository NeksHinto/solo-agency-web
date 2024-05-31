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
          logoSrc="/logos/lagouardeLogo.webp"
          clientInfo="Con más de 40 años en el rubro, la reconocida inmobiliaria acude a
          nosotros para afianzar la comunicación y presencia en redes
          sociales. Creative strategy, Social media, Paid media son las
          herramientas que llevan a Lagouarde a conquistar terrenos
          digitales."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Paid Media",
          ]}
        />

        {gridData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
