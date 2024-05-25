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
import BlackBox from "@/app/components/clientsRedirect";

const paragraph = "Medicina Estética Facial y Corporal";

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
              src="/logos/yellowLogo.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Servicio 360. Desde creative strategy, social media management,
              content creation y graphic design acompañamos en todos los
              desafíos que comprenden comunicación visual y digital de la marca.
            </p>
          </div>
          <div className={styles.client__info}>
            <div>
              <p className={styles.subtitle}>SERVICIOS</p>
            </div>
            <div className={styles.client__info__list}>
              <p>‐ Creative Strategy</p>
              <p>‐ Sovial Media</p>
              <p>‐ Paid Media</p>
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
                src="/yellow/yellowContent26.jpg"
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
              CONTENT
            </p>
            <div className={styles.client__imagetext}>
              <Image
                src="/yellow/yellowContent3.jpg"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                src="/yellow/yellowContent5.jpg"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef3}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent4.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent6.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent8.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent9.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent10.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent11.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent12.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent13.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent14.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent15.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent16.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent17.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent18.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent19.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent20.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent21.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent22.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent23.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent24.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent25.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/yellow/yellowContent27.jpg"
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
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p
              className={styles.client__title}
              style={{ color: "gray", marginBottom: "-1rem" }}
            >
              PAID
            </p>
            <p className={styles.client__title}>MEDIA</p>
            <div className={styles.client__imagetext}>
              <video autoPlay muted controls loop playsInlin>
                <source src="/yellow/yellowPaidMedia.mp4" />
              </video>
              <div className={styles.embla2} style={{ margin: "auto" }}>
                <div className={styles.embla__viewport} ref={emblaRef4}>
                  <div className={styles.embla__container}>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        style={{ margin: "auto" }}
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowPaidMedia6.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowPaidMedia5.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowPaidMedia3.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowPaidMedia2.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowPaidMedia4.mp4" />
                      </video>
                    </div>
                  </div>
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
              SOCIAL
            </p>
            <p className={styles.client__title}>MEDIA</p>
            <div className={styles.client__imagetext}>
              <video
                autoPlay
                muted
                controls
                loop
                playsInline
                style={{ margin: "auto" }}
              >
                <source src="/yellow/yellowSocialMedia.mp4" />
              </video>
              <div className={styles.embla2} style={{ margin: "auto" }}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                  <div className={styles.embla__container}>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowSocialMedia2.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowSocialMedia3.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowSocialMedia4.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowSocialMedia5.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowSocialMedia6.mp4" />
                      </video>
                    </div>
                    <div className={styles.embla__slide2}>
                      <video
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        className={styles.embla__slide2}
                      >
                        <source src="/yellow/yellowSocialMedia7.mp4" />
                      </video>
                    </div>
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
