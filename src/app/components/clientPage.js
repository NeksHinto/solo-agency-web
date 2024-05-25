"use client";
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
import styles from "../../page.module.css";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Script from "next/script";
import ClientsRed from "@/app/components/clientsRedirect";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: "3000",
    }),
  ]);
  // const [emblaRef2] = useEmblaCarousel({ loop: true });
  const [emblaRef3] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000" }),
  ]);
  const [emblaRef4] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000" }),
  ]);
  // const [emblaRef5] = useEmblaCarousel({ loop: true });
  const [emblaRef6] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000" }),
  ]);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Image
                className={styles.client__page__logo}
                src="/logos/dollstoreLogo.png"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", maxWidth: "500px" }}
              />
            </div>
            <div className={styles.client__info}>
              <p>
                Reconocida marca de moda Argentina recurre a nuestro servicio
                360. Desde creative strategy, social media management, content
                creation y paid media (Meta ads) acompañamos en todos los
                desafíos que comprenden comunicación visual y digital.
              </p>
            </div>
          </div>
          <div className={styles.client__services}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p className={styles.subtitle}>SERVICIOS</p>
              <div style={{ backgroundColor: "black", width: "5rem" }}></div>
              <div className={styles.client__info__list}>
                <p>Creative Strategy</p>• <p>Social Media</p>• <p>Content</p>•{" "}
                <p>Paid Media</p>• <p>3D Design</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* <div className={styles.client__content}>
          <div className={styles.client__content__container}> */}
        {/* <div className={styles.client__sale}>
              <Image
                  src="/dollstore/sale preview 4 png.png"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  data-scroll data-scroll-speed="0.1"
              />
              <p className={styles.client__title}>2024</p>
            </div> */}

        {/* <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <div className={styles.client__sale}>
              <Image
                src="/dollstore/sale23text.png"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
                data-scroll
                data-scroll-speed="0.1"
              />
              <p className={styles.client__title}>2023</p>
            </div>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef2}>
                <div className={styles.embla__container}></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title} style={{ color: "gray" }}>
              SOCIAL
            </p>
            <p className={styles.client__title}>MEDIA</p>

            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef6}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding1.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding3.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding4.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding5.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding6.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding7.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding8.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/digitalbranding9.jpg"
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
            <p className={styles.client__title} style={{ color: "gray" }}>
              MAGIC
            </p>
            <p className={styles.client__title}>DOLL</p>

            {/* <p className={styles.client__title}>NAVIDAD 2023</p>
            <Image
              className={styles.client__image}
              src="/dollstore/dollstore navidad GIFT silver 4.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              data-scroll
              data-scroll-speed="0.1"
              style={{
                border: "none",
                margin: "-2rem",
                height: "200px",
                width: "auto",
                maxWidth: "500px",
              }}
            /> */}
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef3}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <video
                      control
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/dollstore/navidadVideo.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <video
                      control
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/dollstore/dollstoreNavidad.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/navidad1.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/navidad2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/navidad3.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/navidad4.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/navidad5.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/navidad6.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/navidad7.jpg"
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

        {/* </div>
        </div> */}
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title} style={{ color: "gray" }}>
              SALE
            </p>
            <p className={styles.client__title}>DOLL</p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/sale241.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/sale242.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/sale243.jpg"
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
                      <source src="/dollstore/sale23.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/sale23.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/sale232.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/dollstore/finalsalereel.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/finalsale1.jpg"
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
            <p className={styles.client__title} style={{ color: "gray" }}>
              LLEVATE TODO
            </p>
            <p className={styles.client__title}>DOLL</p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef4}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/llevatetododoll1.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/llevatetododoll2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/llevatetododoll3.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={styles.client__image}
                    >
                      <source src="/dollstore/llevatetododollsummerreel.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/llevatetododollsum1.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/dollstore/llevatetododollsum3.jpg"
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
        <ClientsRed />
      </div>
    </main>
  );
}