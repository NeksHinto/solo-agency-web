"use client";
import { useEffect } from "react";

import styles from "../../page.module.css";
import Image from "next/image";
import React, { useCallback } from "react";
import Script from "next/script";
import BlackBox from "@/app/components/blackBox";

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
        <div className={styles.client__banner}>
          <div>
            <Image
              className={styles.client__page__logo}
              src="/logos/pimuxLogo.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
                marginBottom: "0rem",
              }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Brandbook design development. Brand kit essentials. Haciendo
              énfasis en sus cimientos basados en la arquitectura contemporánea
              desarrollamos el re - branding y la identidad visual de la marca,
              adecuándose al nuevo sistema de consumo, bajo el objetivo de
              acercarla a un nuevo nicho de arquitectos jóvenes.
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
        </div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <Image
              src="/pimux/BRANDBOOK PIMUX.webp"
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
              src="/pimux/BRANDBOOK PIMUX logo.webp"
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
              src="/pimux/BRANDBOOK PIMUX2.webp"
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
              src="/pimux/BRANDBOOK PIMUX3.webp"
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
              src="/pimux/BRANDBOOK PIMUX4.webp"
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
              src="/pimux/BRANDBOOK PIMUX5.webp"
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
              src="/pimux/BRANDBOOK PIMUX6.webp"
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
              src="/pimux/BRANDBOOK PIMUX7.webp"
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
              src="/pimux/BRANDBOOK PIMUX8.webp"
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
              src="/pimux/BRANDBOOK PIMUX9.webp"
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
