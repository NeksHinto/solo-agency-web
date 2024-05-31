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
              src="/logos/companianativaLogo.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                marginBottom: "-2rem",
              }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Marca referente de mobiliario contemporáneo, recurre a la agencia
              para el desarrollo de piezas audiovisuales orientadas a conectar
              con su audiencia y resaltar el valor agregado en cada uno de sus
              productos y servicios.
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
              COMPAÑIA
            </p>
            <p className={styles.client__title}>NATIVA</p>
            <div className={styles.client__imagetext}>
              <Paragraph
                value={"DISEÑO, EXCLUSIVIDAD, CALIDAD Y DURABILIDAD"}
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
                <source src="/companiaNativa/BARRAS CN_H.264.webm" />
              </video>
            </div>
          </div>
          <div className={styles.client__imagetext}>
            <Image
              src="/companiaNativa/companiaNativa.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Paragraph
              value={"AMBIENTES DE PAZ Y TRANQUILIDAD"}
              className={styles.client__metrics_container_title}
            />
          </div>
          <div className={styles.client__content__container}>
            <div className={styles.masonry__container}>
              <div className={styles.masonry__galery}>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/companiaNativa/Armado mesa Quadra_H.264.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/companiaNativa/companiaNativa2.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/companiaNativa/Armado exterior_H.264.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/companiaNativa/companiaNativa3.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/companiaNativa/companiaNativa4.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/companiaNativa/Centro de mesa navideño_H.264.webm" />
                  </video>
                </div>
                <div>
                  <Image
                    className={styles.client__image}
                    src="/companiaNativa/companiaNativa5.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/companiaNativa/Saludo de fin año_H.264.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/companiaNativa/companiaNativa6.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/companiaNativa/Mesa navideña día_ noche_H.264.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/companiaNativa/companiaNativa7.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/companiaNativa/Sillas de exterior_H.264.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/companiaNativa/companiaNativa8.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/companiaNativa/Proceso de armado mesa Rocky_H.264.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/companiaNativa/companiaNativa9.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline>
                    <source src="/companiaNativa/Saludo de fin año_H.264.webm" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p
              className={styles.client__title}
              style={{ color: "gray", marginBottom: "-1rem" }}
            >
              CASA
            </p>
            <p className={styles.client__title}>NATIVA</p>
            <div className={styles.client__imagetext}>
              <Paragraph
                value={"Prototipo de casa pensado por y para Compañía Nativa"}
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
                <source src="/companiaNativa/Avances Casa Nativa_H.264.webm" />
              </video>
            </div>
          </div>
        </div>
        <BlackBox />
      </div>
    </main>
  );
}
