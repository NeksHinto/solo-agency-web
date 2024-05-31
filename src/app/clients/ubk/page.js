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
              src="/logos/ubkLogo.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Una marca que transforma el movimiento en acción recurre a la
              dirección creativa y estratégica de Solo Agency para la gestión y
              producción de su campaña 2024.
            </p>
          </div>
          <div className={styles.client__info}>
            <div>
              <p className={styles.subtitle}>SERVICIOS</p>
            </div>
            <div className={styles.client__info__list}>
              <p>‐ Content</p>
              <p>‐ Production</p>
              <p>‐ Styling</p>
            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p
              className={styles.client__title}
              style={{ color: "gray", marginBottom: "-1rem" }}
            >
              UNBROKEN
            </p>
            <p className={styles.client__title}>FITWEAR</p>
            <div className={styles.client__imagetext}>
              <Paragraph
                value={"LA ROPA QUE NECESITÁS PARA DAR LO MEJOR DE VOS"}
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
                <source src="/ubk/UBK_H.264.webm" />
              </video>
            </div>
          </div>
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>CONTENT</p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef2}>
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
                      <source src="/ubk/poste UBK_H.264.webm" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk1.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk2.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk3.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk4.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk5.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk6.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk7.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk8.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk9.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk10.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk11.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk12.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk13.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk14.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk15.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk16.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk17.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk18.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk19.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk20.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk21.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk22.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk23.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk24.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk25.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk26.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk27.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk28.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk29.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/ubk/ubk28.webp"
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
        </div>
        <BlackBox />
      </div>
    </main>
  );
}
