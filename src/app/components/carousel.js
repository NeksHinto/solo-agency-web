"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "@/styles/styles.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { DeviceContext } from "../contexts/deviceContext";

const ClientCarousel = ({ items, carouselItemProps, hqVideos }) => {
  const { isMobile } = useContext(DeviceContext);
  const constructYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={styles.embla}>
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        autoPlayStrategy="none"
        autoWidth
        infinite
        disableDotsControls
        disableButtonsControls
      >
        {items.map((item) =>
          item.type === "image" ? (
            <Image
              key={item.id}
              className={
                carouselItemProps
                  ? styles.client__carousel__image__igfeed
                  : styles.client__carousel__image
              }
              src={item.src}
              alt={item.alt}
              width={0}
              height={0}
            />
          ) : item.type === "youtube" ? (
            <iframe
              key={item.id}
              src={constructYoutubeUrl(item.src)}
              allow
              title={item.title}
              allowFullScreen
            ></iframe>
          ) : (
            <video
              key={item.id}
              controls
              autoPlay
              muted
              loop
              playsInline
              className={styles.client__carousel__video}
            >
              {!isMobile && hqVideos ? (
                <source
                  src={item.src.replace(/\.webm(?=.*)$/, "-desktop.webm")}
                />
              ) : (
                <source src={item.src} />
              )}
            </video>
          )
        )}
      </AliceCarousel>
    </div>
  );
};

export default ClientCarousel;
