export const carouselData = [
  {
    title: ["INSTAGRAM", "REELS"],
    items: [
      {
        id: 1,
        type: "video",
        src: "/images/celebreinculina/celebreInCulina.webm",
        alt: "Celebre Inculina Video",
      },
      {
        id: 2,
        type: "video",
        src: "/images/celebreinculina/celebreInCulina2.webm",
        alt: "Celebre Inculina Reels Video",
      },
      {
        id: 3,
        type: "video",
        src: "/images/celebreinculina/celebreInCulina4.webm",
        alt: "Celebre Inculina Reels Video",
      },
      {
        id: 4,
        type: "video",
        src: "/images/celebreinculina/celebreInCulina5.webm",
        alt: "Celebre Inculina Reels Video",
      },
    ],
  },
  {
    title: ["YOU", "TUBE"],
    containerProps: {
      display: "grid",
      gridTemplateColumns: "repeat(6, auto)",
      paddingLeft: "10vw",
      "@media (max-width: 700px)": {
        gridTemplateColumns: "repeat(3, auto)",
      },
    },
    items: [
      {
        id: 5,
        type: "youtube",
        src: "OghYBQWpRbY",
        title: "YouTube video 1",
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        width: 560,
        height: 315,
      },
      {
        id: 6,
        type: "youtube",
        src: "Q3bVEPhMXKE",
        title: "YouTube video 2",
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        width: 560,
        height: 315,
      },
      {
        id: 7,
        type: "youtube",
        src: "GdHiL9zUkEM",
        title: "YouTube video 3",
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        width: 560,
        height: 315,
      },
      {
        id: 8,
        type: "youtube",
        src: "t1EQRf_6C94",
        title: "YouTube video 4",
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        width: 560,
        height: 315,
      },
    ],
  },
];
