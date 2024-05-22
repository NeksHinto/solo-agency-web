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
            src="/logos/capediabloLogo.png"
            alt="Solo Agency"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxWidth: '200px', marginTop: '5rem', marginBottom: '-2rem'}}
            />
          </div>
          <div className={styles.client__info}>
            <p>
              Marca norteamericana que aterriza en buenos aires bajo el lema de: “Los relojes no solamente marcan el tiempo, sino que son sinónimo de estilo”. Con esta premisa se han desarrollado piezas de fotografía y video con fines publicitarios y de branding.  
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
            <div className={styles.client__imagetext}>
              <Paragraph value={'LOS RELOJES NO SOLAMENTE MARCAN EL TIEMPO, SINO QUE SON SINÓNIMO DE ESTILO'} className={styles.client__metrics_container_title} />
              <Image
                src="/capeDiablo/capediablo.jpg"
                alt="Solo Agency"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <div className={styles.client__content__container}>
            <div className={styles.masonry__container}>
              <div className={styles.masonry__galery} style={{width: '80%'}}>
                <div className={styles.embla__slide}>
                  <Image
                    src="/capeDiablo/capediablo.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/capeDiablo/capediablo2.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/capeDiablo/capediablo3.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/capeDiablo/capediablo4.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src="/capeDiablo/capediablo5.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image 
                    src="/capeDiablo/capediablo6.jpg"
                    alt="Solo Agency"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <video autoPlay muted controls loop playsInline>
                  <source src="/capeDiablo/capediabloV.mp4" />
                </video>
                <video autoPlay muted controls loop playsInline>
                  <source src="/capeDiablo/capediabloV2.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <ClientsRed/>
      </div>
    </main>
  );
}