"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import React from "react";
import Script from "next/script";
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
    <main className={styles.main}>
      <Script type="text/javascript" src="/scripts/lightbox.js" />
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/logos/dollstoreLogo.webp"
          clientInfo="Reconocida marca de moda Argentina recurre a nuestro servicio 360. Desde creative strategy, social media management, content creation y paid media (Meta ads) acompañamos en todos los desafíos que comprenden comunicación visual y digital."
          services={[
            "Creative Strategy",
            "Social Media",
            "Content",
            "Paid Media",
            "3D Design",
          ]}
        />

        {carouselData.map((carousel) => (
          <ClientPageContent key={carousel.title} carousel={carousel} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
