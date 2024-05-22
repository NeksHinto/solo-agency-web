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

export default function Home() {

  useEffect( () => {
    
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef2,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '5000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef3,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef4,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef5,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])
  const [emblaRef6,] = useEmblaCarousel({ loop: true }, [Autoplay({delay: '3000', jump: 'false', playOnInit: 'true'})])

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
              src="/logos/lidhermaLogo.png"
              alt="Solo Agency"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px', marginBottom: '0rem'}}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Tras el lanzamiento de sus nuevas bases “SKIN COLOUR BB CREAM” 
              Realizamos todo el contenido audiovisual nacional para todos sus canales de comunicación. 
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
        </motion.div>
        <div className={styles.client__content}>
          <div className={styles.client__content__container}>
            <p className={styles.client__title} style={{color: 'gray', marginBottom: '-1rem'}}>SKIN COLOUR</p>
            <p className={styles.client__title}>BB CREAM</p>
            <div className={styles.client__imagetext}>
              <Paragraph value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nulla tincidunt, consectetur lectus quis, malesuada nulla. Ut pretium arcu eget sem euismod, sed tincidunt eros maximus.'} className={styles.client__metrics_container_title} />
              <video autoPlay muted controls loop playsInline style={{margin: 'auto'}}>
                <source src="/lidherma/lidhermaV.mp4" />
              </video>
            </div>
          </div>
          <div className={styles.client__content__container}>
            <p className={styles.client__title}>PHOTO</p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma3.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma4.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma5.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma6.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma7.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma8.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma9.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma10.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.client__image}
                      src="/lidherma/lidherma11.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.client__title}>VIDEO</p>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef2}>
                <div className={styles.embla__container}>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lidherma/lidhermaV.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lidherma/lidhermaV2.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lidherma/lidhermaV3.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lidherma/lidhermaV4.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lidherma/lidhermaV5.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.client__image}>
                        <source src="/lidherma/lidhermaV6.mp4" />
                      </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ClientsRed/>
      </div>
    </main>
  );
}
