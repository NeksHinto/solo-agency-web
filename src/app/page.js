"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Paragraph from "./components/paragraph";
import ClientsSection from "./components/clientsSection";
import ServicesSection from "./components/servicesSection";
import CTA from "./components/idea";

const paragraph =
  "Somos un booster de marcas, creadores y de tus ideas. Creemos firmemente que hoy en día detrás de cada medio lo que más importa es el carácter humano otorgándole a tu marca su propia identidad siendo única e irrepetible. ";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.center}
        data-scroll
        data-scroll-speed="0.7"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 },
        }}
      >
        <Image
          src="/SOLO AGENCY LOGO TYPO BLANCO.png"
          alt="Solo Agency"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", maxWidth: "1200px" }}
        />
        <p id="subtitle">
          NO SOMOS <strong>SOLO</strong> UNA AGENCIA
        </p>
      </motion.div>
      {/* <video
        autoPlay
        muted
        controls
        loop
        playsInline
        style={{ marginBottom: "20vh" }}
      >
        <source src="/SOLOAGENCY.mp4" />
      </video> */}
      <div className={styles.WWW}>
        <div>
          <p className={styles.www__title}>
            <strong>WWW.</strong>
            <span className={styles.cursor}>|</span>
          </p>
          <p className={styles.title}>WHAT, WHO, WHY?</p>
        </div>
      </div>
      <Paragraph value={paragraph} />
      {/* <div className={styles.aboutredir}>
            <p>
              NO SOMOS <strong>SOLO</strong> UNA AGENCIA
            </p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p className={styles.button2} style={{textAlign: 'left'}}><Link href="/about">ABOUT US</Link></p>
            </div>
        </div> */}
      <ClientsSection />
      <ServicesSection />
      <CTA />
    </main>
  );
}
