"use client";
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
import styles from "../../page.module.css";
import Image from "next/image";
import React, { useCallback } from "react";
import Script from "next/script";
import BlackBox from "@/app/components/clientsRedirect";

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
        <motion.div
          className={styles.client__banner}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.75,
            x: { duration: 0.25 },
          }}
        >
          <div>
            <Image
              className={styles.client__page__logo}
              src="/logos/timelessLogo.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Centro de medicina estética recurre a Solo Agency para construir
              los cimientos de su marca. Se ha elaborado el diseño del brandbook
              para aportar concepto, narrativa y morfología a su idea.
            </p>
          </div>
          <div className={styles.client__info}>
            <div>
              <p className={styles.subtitle}>SERVICIOS</p>
            </div>
            <div className={styles.client__info__list}>
              <p>‐ Branding</p>
            </div>
          </div>
        </motion.div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK2.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK3.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK4.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK5.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK6.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK7.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK8.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK9.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK10.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK11.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK12.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK13.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK14.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK15.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
          <div className={styles.client__content__container}>
            <Image
              src="/timeless/TIMELESS BRANDBOOK16.jpg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "0rem",
                borderRadius: "30px",
                padding: "0.5rem",
              }}
            />
          </div>
        </div>
        <BlackBox />
      </div>
    </main>
  );
}
