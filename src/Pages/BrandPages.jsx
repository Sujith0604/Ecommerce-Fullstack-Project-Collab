import { useState } from "react";

const BrandPages = () => {
  const [brands, setBrands] = useState([
    {
      title: "Annailia Beauty",
      imageUrl: "/images/Annalia Beauty.webp",
    },
    {
      title: "AXIS-Y",
      imageUrl: "/images/AXIS-Y.webp",
    },
    {
      title: "Beauty of Joseon",
      imageUrl: "/images/Beauty of Joseon.webp",
    },
    {
      title: "Benton",
      imageUrl: "/images/Benton.webp",
    },
    {
      title: "By Wishtrend",
      imageUrl: "/images/By Wishtrend.webp",
    },
    {
      title: "Cosrx",
      imageUrl: "/images/Cosrx.webp",
    },
    {
      title: "Dear Klairs",
      imageUrl: "/images/Dear Klairs.webp",
    },
    {
      title: "Etude House",
      imageUrl: "/images/Etude House.webp",
    },
    {
      title: "Haruharu",
      imageUrl: "/images/Haruharu.webp",
    },
    {
      title: "Holika Holika",
      imageUrl: "/images/Holika Holika.webp",
    },
    {
      title: "I'm from",
      imageUrl: "/images/I'm from.webp",
    },
    {
      title: "I'm sorry for my skin",
      imageUrl: "/images/Imsorryformyskin.webp",
    },
  ]);

  return <div>BrandPages</div>;
};

export default BrandPages;
