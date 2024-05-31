"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
import React from "react";
import Script from "next/script";
import BlackBox from "@/app/components/blackBox";
import { carouselData } from "./carouselData";
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
          logoSrc="/logos/jpLogo.webp"
          clientInfo="Junto a la marca realizamos la dirección estratégica para el
          desarrollo de editoriales para redes sociales, reflejando los
          valores de simplicidad, movimiento y calidad, aspectos claves de
          una mujer contemporánea y joven, el público meta planteado con
          esta desarrollo."
          services={[
            "Content",
            "Creative Strategy",
            "Social Media",
            "Production & Styling",
          ]}
        />
        {carouselData.map((data) => (
          <ClientPageContent key={data.title} carousel={false} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
