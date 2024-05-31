"use client";
import { useEffect } from "react";

import styles from "../../page.module.css";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Script from "next/script";
import Paragraph from "@/app/components/paragraph";
import BlackBox from "@/app/components/blackBox";
import { carouselData } from "./carouselData";

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
              src="/logos/justaosadiaLogo.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Marca de moda Argentina, recurre a Solo Agency para la producción
              audiovisual de la cápsula SS24.
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
              CAPSULA
            </p>
            <p className={styles.client__title}>SS24</p>
          </div>
          <div className={styles.client__content__container}>
            <div className={styles.masonry__container}>
              <div className={styles.masonry__galery} style={{ width: "80%" }}>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia2.webm" />
                  </video>
                </div>
                {/* <div className={styles.embla__slide}>
                    <video autoPlay muted controls loop playsInline>
                      <source src="/justaOsadia/justaOsadia3.webm" />
                    </video>
                </div> */}
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia4.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia5.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia6.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia7.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia8.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia9.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/justaOsadia/justaOsadia10.webm" />
                  </video>
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
