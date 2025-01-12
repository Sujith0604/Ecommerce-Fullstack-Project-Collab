import { useState } from "react";
import BrandCard from "../components/BrandCard";

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
    {
      title: "Isntree",
      imageUrl: "/images/Isntree.webp",
    },
    {
      title: "Laneige",
      imageUrl: "/images/Laneige.webp",
    },
    {
      title: "Lily by Red",
      imageUrl: "/images/Lilybyred.webp",
    },
    {
      title: "llimi",
      imageUrl: "/images/llimi.webp",
    },
    {
      title: "Medi-Peel",
      imageUrl: "/images/Medi-Peel.webp",
    },
    {
      title: "Muldream",
      imageUrl: "/images/Muldream.webp",
    },
    {
      title: "Papa Recipe",
      imageUrl: "/images/Papa Recipe.webp",
    },
    {
      title: "Priveda",
      imageUrl: "/images/Priveda.webp",
    },
    {
      title: "Ribeskin",
      imageUrl: "/images/Ribeskin.webp",
    },
    {
      title: "Some By Mi",
      imageUrl: "/images/Some By Mi.webp",
    },
    {
      title: "Spot Patch",
      imageUrl: "/images/Spot Patch.webp",
    },
    {
      title: "Tocobo",
      imageUrl: "/images/Tocobo.webp",
    },
    {
      title: "VT",
      imageUrl: "/images/VT.webp",
    },
  ]);

  return (
    <div className=" flex flex-wrap gap-5 items-center justify-around px-4">
      {brands?.map((brand, i) => (
        <BrandCard key={i} brand={brand} />
      ))}
    </div>
  );
};

export default BrandPages;
