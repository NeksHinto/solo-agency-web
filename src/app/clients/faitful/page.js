"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";
import Script from "next/script";
import BlackBox from "@/app/components/blackBox";
import { carouselData, gridData } from "./carouselData";
import ClientHeader from "@/app/components/clientHeader";
import ClientPageContent from "@/app/components/clientPageContent";

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
          logoSrc="/logos/faitfulLogo.webp"
          clientInfo="Reconocido vivero con más de 10 años de trayectoria recurre a
          nuestro servicio 360. Desde creative strategy, social media
          management, content creation y paid media acompañamos en todos los
          desafíos que comprenden comunicación visual y digital."
          services={["Creative Strategy", "Social Media", "Paid Media"]}
        />
        {gridData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={true} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
