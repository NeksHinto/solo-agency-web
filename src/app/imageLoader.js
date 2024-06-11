"use client";

export default function myImageLoader({ src, width }) {
  return `https://soloagency.netlify.app/.netlify/images?url=${src}?w=${width}&q=100`;
}
