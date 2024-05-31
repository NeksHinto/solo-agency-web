"use client";
import { useEffect } from "react";

import styles from "../../page.module.css";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Script from "next/script";
import BlackBox from "@/app/components/blackBox";
import Paragraph from "@/app/components/paragraph";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000", jump: "false", playOnInit: "true" }),
  ]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "5000", jump: "false", playOnInit: "true" }),
  ]);
  const [emblaRef3] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000", jump: "false", playOnInit: "true" }),
  ]);
  const [emblaRef4] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000", jump: "false", playOnInit: "true" }),
  ]);
  const [emblaRef5] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000", jump: "false", playOnInit: "true" }),
  ]);
  const [emblaRef6] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000", jump: "false", playOnInit: "true" }),
  ]);

  return (
    <main className={styles.main}>
      <Script type="text/javascript" src="/scripts/lightbox.js" />
      <div className={styles.client__page}>
        <div className={styles.client__banner}>
          <div>
            <Image
              className={styles.client__page__logo}
              src="/logos/cristhoLogo.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                marginTop: "5rem",
                marginBottom: "-5rem",
              }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Una marca que resignifica los valores del boho chic recurre a la
              dirección creativa y estratégica de Solo Agency para la gestión y
              producción de su campaña 2022. Junto a diseño gráfico y
              comunicación estratégica reforzamos sus canales digitales para los
              nuevos desafíos del mercado.
            </p>
          </div>
          <div className={styles.client__info}>
            <div>
              <p className={styles.subtitle}>SERVICIOS</p>
            </div>
            <div className={styles.client__info__list}>
              <p>‐ Content</p>
            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p
              className={styles.client__title}
              style={{ color: "gray", marginBottom: "-1rem" }}
            >
              CAMPAÑA
            </p>
            <p className={styles.client__title}>2023</p>
            <div className={styles.client__imagetext}>
              <Paragraph
                value={"UNA MARCA IDEADA PARA CONECTAR CON TU CRISTO INTERNO"}
                className={styles.client__metrics_container_title}
              />
              <Image
                className={styles.masonry__image}
                src="/cristho/cristho.webp"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <div className={styles.client__content__container}>
            <div className={styles.masonry__container}>
              <div className={styles.masonry__galery}>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho2.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho3.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho4.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho5.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho6.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho7.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho8.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho9.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho10.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho11.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho12.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho13.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho14.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/cristho/cristho15.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BlackBox />
      </div>
    </main>
  );
}
