"use client";
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
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
              src="/logos/elgourmetLogo.webp"
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
              De la idea a la realidad llevamos a cabo la creatividad y
              producción de la campaña digital gastronómica de “ruta 40’.
            </p>
          </div>
          <div className={styles.client__info}>
            <div>
              <p className={styles.subtitle}>SERVICIOS</p>
            </div>
            <div className={styles.client__info__list}>
              <p>‐ Creative Strategy</p>
              <p>‐ Content</p>
            </div>
          </div>
        </motion.div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p
              className={styles.client__title}
              style={{ color: "gray", marginBottom: "-1rem" }}
            >
              RUTA
            </p>
            <p className={styles.client__title}>40</p>
            <div className={styles.client__imagetext}>
              <Paragraph
                value={"UN DIA CON GUSTO A..."}
                className={styles.client__metrics_container_title}
              />
              <video autoPlay muted controls loop playsInline>
                <source src="/elGourmet/DIA1SALTA.webm" />
              </video>
            </div>
          </div>

          <div className={styles.client__content__container}>
            <p className={styles.client__title}>SALE</p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <video
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/elGourmet/DIA2JUJUY.webm" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <video
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/elGourmet/DIA3JUJUY.webm" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <video
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/elGourmet/DIA4SALTA.webm" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <video
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/elGourmet/DIA5SALTA.webm" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <video
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/elGourmet/DIA6SALTA.webm" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <video
                      autoPlay
                      muted
                      controls
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/elGourmet/DIA15CATAMARCA.webm" />
                    </video>
                  </div>
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
