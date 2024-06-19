"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";

import { carouselData } from "@/constants/timelessData";
import ClientPageContent from "@/components/clientPageContent";
import ClientHeader from "@/components/clientHeader";

export default function Home() {
  return (
    <main className={styles.main__client}>
      <div className={styles.client__page}>
        <ClientHeader
          logoSrc="/images/logos/desktop/timelessLogo.webp"
          clientInfo="Centro de medicina estética recurre a Solo Agency para construir
          los cimientos de su marca. Se ha elaborado el diseño del brandbook
          para aportar concepto, narrativa y morfología a su idea."
          services={["Branding"]}
        />

        {carouselData.map((data) => (
          <ClientPageContent key={data.title} branding={true} data={data} />
        ))}
      </div>
    </main>
  );
}
