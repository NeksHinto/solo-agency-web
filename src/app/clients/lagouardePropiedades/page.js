'use client'
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
import styles from "../../page.module.css"
import Image from "next/image";
import React, { useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Script from "next/script";
import Paragraph from "@/app/components/paragraph";
import ClientsRed from "@/app/components/clientsRedirect";

const  paragraph = "GRAN TRAYECTORIA EN EL RUBRO INMOBILIARIO"

export default function Home() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true', dragFree: 'true'})])
  const [emblaRef2,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true', dragFree: 'true'})])
  const [emblaRef3,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true', dragFree: 'true'})])
  const [emblaRef4,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true', dragFree: 'true'})])
  const [emblaRef5,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true', dragFree: 'true'})])
  const [emblaRef6,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true', dragFree: 'true'})])

  return (
    <main className={styles.main}>
      <Script type="text/javascript" src="/scripts/lightbox.js"/>
      <div className={styles.client__page}>
        <motion.div
          className={styles.client__banner} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
          transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 }
          
        }}>
          <div>
            <Image
            className={styles.client__page__logo}
            src="/logos/lagouardeLogo.png"
            alt="Solo Agency"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxWidth: '500px',}}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Con más de 40 años en el rubro, la reconocida inmobiliaria acude a nosotros para afianzar la comunicación y presencia en redes sociales. Creative strategy, Social media, Paid media son las herramientas que llevan a Lagouarde a conquistar terrenos digitales.  
            </p>
          </div>
            <div className={styles.client__info}>
          <div>
            <p className={styles.subtitle}>SERVICIOS</p>
          </div>
            <div className={styles.client__info__list}>
              <p>‐ Creative Strategy</p>
              <p>- Social Media</p>
              <p>- Content</p>
              <p>- Paid Media</p>
            </div>
          </div>
        </motion.div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title} style={{color: 'gray', marginBottom: '-1rem'}}>CREATIVE</p>
            <p className={styles.client__title}>STRATEGY</p>
            <div className={styles.client__imagetext}>
              <video autoPlay muted controls loop playsInline >
                <source src="/lagouardePropiedades/lagouardeReel.mp4" />
              </video>
              <Paragraph value={paragraph} />
            </div>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef3}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lagouardePropiedades/lagouardeReel.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardePropiedades/lagouardeStory2_1.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lagouardePropiedades/lagouardeReel2.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardePropiedades/lagouardeStory2_2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lagouardePropiedades/lagouardeReel.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardePropiedades/lagouardeStory2_3.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <video autoPlay muted controls loop playsInline className={styles.client__image}>
                      <source src="/lagouardePropiedades/lagouardeReel3.mp4" />
                    </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lagouardePropiedades/lagouardeStory2_4.jpg"
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
          <div className={styles.client__content__container} style={{width: '100%'}}>
            <div className={styles.masonry__container}>
            <p className={styles.client__title} style={{color: 'gray', marginBottom: '-1rem'}}>SOCIAL</p>
            <p className={styles.client__title}>MEDIA</p>
              <div className={styles.masonry__galery} style={{marginTop: '0rem'}}>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory1_1.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed1_1.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory1_2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed1_2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory1_3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed1_3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory1_4.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed1_4.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory3_1.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed3_2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory3_2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed3_3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory3_3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed3_4.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory3_4.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed3_5.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed3_6.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed3_7.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeFeed3_8.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <video autoPlay muted controls loop playsInline className={styles.client__image}>
                    <source src="/lagouardePropiedades/lagouardeReel3.mp4" />
                  </video>
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory4_2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory4_3.png"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    className={styles.masonry__image}
                    src="/lagouardePropiedades/lagouardeStory4_5.jpg"
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
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>PAID MEDIA</p>
            <div className={styles.client__content__container}>
              <div className={styles.client__content__paidmedia}>
                <Image
                  src="/lagouardePropiedades/lagouardePaidMedia.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.client__paid__image}
                />
                <Image
                  src="/lagouardePropiedades/lagouardePaidMedia2.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.client__paid__image}
                />
                <Image
                  src="/lagouardePropiedades/lagouardePaidMedia3.jpg"
                  alt="Solo Agency"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.client__paid__image}
                />
              </div>
            </div>
          </div>
        </div>
        <ClientsRed/>
      </div>
    </main>
  );
}
