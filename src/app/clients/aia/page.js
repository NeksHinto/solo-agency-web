'use client'
import { useEffect } from "react";
import { delay, motion } from "framer-motion";
import styles from "../../page.module.css"
import Image from "next/image";
import React, { useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Script from "next/script";
import ClientsRed from "@/app/components/clientsRedirect";
import Paragraph from "@/app/components/paragraph";

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
            src="/logos/aiaLogo.png"
            alt="Solo Agency"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxWidth: '300px', marginTop: '5rem', marginBottom: '-5rem'}}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Junto a la marca realizamos la dirección estratégica para el desarrollo de editoriales para redes sociales, reflejando los valores de simplicidad, movimiento y calidad, aspectos claves de una mujer contemporánea y joven, el público meta planteado con esta desarrollo.  
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
              <p className={styles.client__title} style={{color: 'gray', marginBottom: '-1rem'}}>BE FREE</p>
              <p className={styles.client__title}>BE AIA</p>
              <div className={styles.client__imagetext}>
                <Paragraph value={'ATHLEISURE WEAR FOR EVERYDAY LIFE'} className={styles.client__metrics_container_title} />
                <video autoPlay muted controls loop playsInline style={{margin: 'auto'}}>
                  <source src="/aia/aiaLycraVision.mp4" />
                </video>
              </div>
            </div>
            <div className={styles.client__content__container} style={{width: '100%'}}>
              <div className={styles.masonry__container}>
                <div className={styles.masonry__galery}>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia2.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.masonry__image}>
                        <source src="/aia/aiaReel.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia3.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia4.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.masonry__image}>
                        <source src="/aia/aiaLycraVision.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia5.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia6.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.masonry__image}>
                        <source src="/aia/aiaJogginConMusculosa.mp4" />
                      </video>
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia7.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia8.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                    <Image
                      className={styles.masonry__image}
                      src="/aia/aia9.jpg"
                      alt="Solo Agency"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.embla__slide}>
                      <video autoPlay muted controls loop playsInline className={styles.masonry__image}>
                        <source src="/aia/aiaBatallaDeTenis.mp4" />
                      </video>
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
