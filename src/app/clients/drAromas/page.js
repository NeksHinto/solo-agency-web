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
              src="/logos/doctoraromasLogo.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                marginTop: "5rem",
                marginBottom: "1rem",
              }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Solo agency for export, realizamos la dirección estratégica y la
              generación de contenido audiovisual para reconocida marca de
              aromatizantes con base en Miami, USA.
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
              HOME
            </p>
            <p className={styles.client__title}>PERFUMES</p>
            <div className={styles.client__imagetext}>
              <Paragraph
                value={"SCENT YOUR HOME THROUGH YOUR CENTRAL A/C"}
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
                <source src="/drAromas/drAromasVideo5.webm" />
              </video>
            </div>
          </div>
          <div className={styles.client__content__container}>
            <div className={styles.masonry__container}>
              <div className={styles.masonry__galery}>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/drAromas/drAromas.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/drAromas/drAromas2.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    className={styles.masonry__image}
                  >
                    <source src="/drAromas/drAromasVideo8.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    className={styles.masonry__image}
                  >
                    <source src="/drAromas/drAromasVideo2.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/drAromas/drAromas3.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/drAromas/drAromas4.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    className={styles.masonry__image}
                  >
                    <source src="/drAromas/drAromasVideo3.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    className={styles.masonry__image}
                  >
                    <source src="/drAromas/drAromasVideo4.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/drAromas/drAromas5.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    className={styles.masonry__image}
                  >
                    <source src="/drAromas/drAromasVideo5.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    className={styles.masonry__image}
                  >
                    <source src="/drAromas/drAromasVideo6.webm" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/drAromas/drAromas6.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/drAromas/drAromas7.webp"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    className={styles.masonry__image}
                  >
                    <source src="/drAromas/drAromasVideo7.webm" />
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
