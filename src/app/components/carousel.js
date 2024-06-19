"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "@/styles/styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DeviceContext } from "../contexts/deviceContext";

const ClientCarousel = ({ items, carouselItemProps, hqVideos }) => {
  const { isMobile } = useContext(DeviceContext);
  const constructYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: carouselItemProps ? 3 : 4,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.embla}>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default ClientCarousel;
