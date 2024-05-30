"use client";
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
import styles from "../../page.module.css";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Script from "next/script";
import Paragraph from "@/app/components/paragraph";
import BlackBox from "@/app/components/blackBox";

const paragraph = "The girl next door... ";

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
              src="/logos/hisilvieLogo.webp"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Caso de éxito Solo Agency. Bajo la estrategia creativa, la
              generación de contenido y el análisis de métricas convertimos al
              perfil de silvie en una marca referente de moda argentina
              consiguiendo más de 100.000 seguidores en tres meses.
            </p>
          </div>
          <div className={styles.client__info}>
            <div>
              <p className={styles.subtitle}>SERVICIOS</p>
            </div>
            <div className={styles.client__info__list}>
              <p>‐ Creative Strategy</p>
              <p>‐ Production & Styling</p>
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
              CREATIVE
            </p>
            <p className={styles.client__title}>STRATEGY</p>
            <div className={styles.client__imagetext}>
              <Image
                src="/hisilvie/hiSilvie2.webp"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Paragraph
                value={paragraph}
                className={styles.client__metrics_container_title}
              />
            </div>
            <p className={styles.client__title} style={{ marginTop: "4rem" }}>
              IMAGE
            </p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef3}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie2.webp"
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
                      className={styles.client__image}
                    >
                      <source src="/hisilvie/looks inspirados en... SILVIE_H.264.webm" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie3.webp"
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
                      className={styles.client__image}
                    >
                      <source src="/hisilvie/looks para ir a trabajar SILVIE_H.264.webm" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie4.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie5.webp"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/hisilvie/hiSilvie6.webp"
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
                      className={styles.client__image}
                    >
                      <source src="/hisilvie/LOOK OLD MONEY final_H.264.webm" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <p
            className={styles.client__title}
            style={{ color: "gray", marginBottom: "-1rem" }}
          >
            MONTHLY
          </p>
          <p className={styles.client__title}>STATISTICS</p>
          <div className={styles.client__metrics_container}>
            <div className={styles.client__metrics}>
              <div className={styles.client__metrics_box}>
                <p className={styles.client__metrics_container_title}>17k</p>
                <p>FOLLOWERS</p>
              </div>
              <div className={styles.client__metrics_box}>
                <p className={styles.client__metrics_container_title}>
                  11,547k
                </p>
                <p>INTERACTIONS</p>
              </div>
            </div>
            <div className={styles.client__metrics}>
              <div className={styles.client__metrics_box}>
                <p className={styles.client__metrics_container_title}>91k</p>
                <p>MEDIA PLAYS</p>
              </div>
              <div className={styles.client__metrics_box}>
                <p className={styles.client__metrics_container_title}>
                  167,278k
                </p>
                <p>REACH</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.client__content}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: "1rem",
            }}
          ></div>
          <div className={styles.client__social_media}>
            <Image
              src="/instagram.svg"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
            />
            <a
              href="https://www.instagram.com/hisilvie_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="blank"
            >
              <p>@HISILVIE_</p>
            </a>
          </div>
          <div className={styles.client__comparison}>
            <div>
              <p className={styles.title} style={{ color: "gray" }}>
                Before
              </p>
              <Image
                className={styles.client__image}
                src="/hisilvie/ANTES.webp"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div>
              <p className={styles.title}>After</p>
              <Image
                className={styles.client__image}
                src="/hisilvie/DESPUES.webp"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p
              className={styles.client__title}
              style={{ color: "gray", marginBottom: "-1rem" }}
            >
              #UNCAFE
            </p>
            <p className={styles.client__title}>CONVOS</p>
            <div className={styles.client__imagetext}>
              <Paragraph
                value={"UNA PRODUCCION DE SOLO AGENCY"}
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
                <source src="/hisilvie/uncafeconvos.webm" />
              </video>
            </div>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef6}>
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
                      <source src="/hisilvie/uncafeconvos2.webm" />
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
                      <source src="/hisilvie/uncafeconvos3.webm" />
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
                      <source src="/hisilvie/uncafeconvos4.webm" />
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
