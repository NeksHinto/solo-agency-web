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
              src="/logos/terrazasdelosandesLogo.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Solo Agency ha tenido el rol de registrar el evento de lanzamiento
              de su línea de vinos reserva, elaborando piezas fotográficas y
              audiovisuales del mismo.
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
              TERRAZAS DE
            </p>
            <p className={styles.client__title}>LOS ANDES</p>
            <div className={styles.client__imagetext}>
              <Paragraph
                value={"LA MAGIA DE LA MONTAÑA"}
                className={styles.client__metrics_container_title}
              />
              <video
                autoPlay
                muted
                controls
                loop
                playsInline
                style={{ margin: "auto" }}
              >
                <source src="/terrazas/terrazasUnboxing.webm" />
              </video>
            </div>
          </div>
          <div className={styles.client__content__container}>
            <div className={styles.masonry__container}>
              <div className={styles.masonry__galery} style={{ width: "95%" }}>
                <div className={styles.embla__slide}>
                  <Image
                    src="/terrazas/terrazas.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/terrazas/terrazas2.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/terrazas/terrazas3.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/terrazas/terrazas4.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/terrazas/terrazas5.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/terrazas/terrazas6.webp"
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
