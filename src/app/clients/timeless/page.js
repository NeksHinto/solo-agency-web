"use client";
import { useEffect } from "react";
import styles from "../../page.module.css";
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
    <main className={styles.main__client}>
      <Script type="text/javascript" src="/scripts/lightbox.js" />
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/logos/timelessLogo.webp"
          clientInfo="Centro de medicina estética recurre a Solo Agency para construir
          los cimientos de su marca. Se ha elaborado el diseño del brandbook
          para aportar concepto, narrativa y morfología a su idea."
          services={["Digital Branding"]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} branding={true} data={data} />
        ))}

        <BlackBox />
      </div>
    </main>
  );
}
