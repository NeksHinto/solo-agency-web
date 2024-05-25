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
    Autoplay({
      delay: "3000",
      jump: "false",
      playOnInit: "true",
      dragFree: "true",
    }),
  ]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: "3000",
      jump: "false",
      playOnInit: "true",
      dragFree: "true",
    }),
  ]);
  const [emblaRef3] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: "3000",
      jump: "false",
      playOnInit: "true",
      dragFree: "true",
    }),
  ]);
  const [emblaRef4] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: "3000",
      jump: "false",
      playOnInit: "true",
      dragFree: "true",
    }),
  ]);
  const [emblaRef5] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: "3000",
      jump: "false",
      playOnInit: "true",
      dragFree: "true",
    }),
  ]);
  const [emblaRef6] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: "3000",
      jump: "false",
      playOnInit: "true",
      dragFree: "true",
    }),
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
              src="/logos/lagouardeLogo.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
                marginBottom: "-3ssssssssssssssssssrem",
              }}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Brandbook design development. Brand kit essentials. Haciendo
              énfasis en sus cimientos basados en la gastronomía de lujo
              desarrollamos el re-branding y la identidad visual de la marca.
              Social media management. Junto a diseño gráfico y comunicación
              estratégica reforzamos sus canales digitales para los nuevos
              desafíos del mercado.
            </p>
          </div>
          <div className={styles.client__info}>
            <div>
              <p className={styles.subtitle}>SERVICIOS</p>
            </div>
            <div className={styles.client__info__list}>
              <p>‐ Branding</p>
              <p>‐ Creative Strategy</p>
              <p>‐ Social Media</p>
              <p>‐ Content</p>
            </div>
          </div>
        </motion.div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <Image
              src="/lagouardeCatering/lagouardeCBrandbook1.jpg"
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
              src="/lagouardeCatering/lagouardeCBrandbook11.jpg"
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
              src="/lagouardeCatering/lagouardeCBrandbook14.jpg"
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
              src="/lagouardeCatering/lagouardeCBrandbook16.jpg"
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
              src="/lagouardeCatering/lagouardeCBrandbook19.jpg"
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
              src="/lagouardeCatering/lagouardeCBrandbook20.jpg"
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
              src="/lagouardeCatering/lagouardeCBrandbook21.jpg"
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
              src="/lagouardeCatering/lagouardeCBrandbook25.jpg"
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
              <Image
                src="/lagouardeCatering/lagouardeCFeedCompleto.png"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Paragraph value={"SABEMOS COMO COMBINAR SABORES Y TEXTURAS"} />
            </div>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef3}>
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
                      <source src="/lagouardeCatering/lagouardeCReel2.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardeCatering/lagouardeCHistoria1_1.jpg"
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
                      <source src="/lagouardeCatering/lagouardeCReel3.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardeCatering/lagouardeCHistoria1_2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardeCatering/lagouardeCHistoria1_3.jpg"
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
                      <source src="/lagouardePropiedades/lagouardeReel3.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardeCatering/lagouardeCHistoria2_1.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardeCatering/lagouardeCHistoria2_2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardeCatering/lagouardeCHistoria3_1.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardeCatering/lagouardeCHistoria3_2.jpg"
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
                      <source src="/lagouardeCatering/lagouardeCReel.mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.client__content__container}
            style={{ width: "100%" }}
          >
            <div className={styles.masonry__container}>
              <div
                className={styles.masonry__galery}
                style={{ marginTop: "0rem" }}
              >
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCFeed.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCFeed2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCFeed3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent4.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCFeed4.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent5.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCFeed5.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent6.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCFeed6.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent7.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent8.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent9.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent10.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent11.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent12.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent13.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent14.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent15.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardeCatering/lagouardeCContent16.jpg"
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
