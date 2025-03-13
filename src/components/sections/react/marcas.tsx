import React, { useState } from "react";

import {
  Logo1,
  Logo10,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo7,
  Logo9,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo20,
  Logo22,
  Logo23,
} from "./logos";
import ScrollingBanner from "./scrolling-banner";

const logos = [
  { key: "logo-1", logo: Logo1 },
  { key: "logo-2", logo: Logo2 },
  { key: "logo-3", logo: Logo3 },
  { key: "logo-4", logo: Logo4 },
  { key: "logo-5", logo: Logo5 },
  { key: "logo-7", logo: Logo7 },
  { key: "logo-9", logo: Logo9 },
  { key: "logo-10", logo: Logo10 },
  { key: "logo-11", logo: Logo11 },
  { key: "logo-12", logo: Logo12 },
  { key: "logo-13", logo: Logo13 },
  { key: "logo-14", logo: Logo14 },
  { key: "logo-15", logo: Logo15 },
  { key: "logo-16", logo: Logo16 },
  { key: "logo-17", logo: Logo17 },
  { key: "logo-18", logo: Logo18 },
  { key: "logo-19", logo: Logo19 },
  { key: "logo-20", logo: Logo20 },
  { key: "logo-22", logo: Logo22 },
  { key: "logo-23", logo: Logo23 },
];

export default function Carrusel() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const handleMouseEnter = (key: string) => {
    setHoveredLogo(key);
  };

  const handleMouseLeave = () => {
    setHoveredLogo(null);
  };

  return (
    <section className="mt-10 mx-auto w-full ma x-w-6xl px-10 py-20 sm:py-32 lg:px-10 lg:py-20 dark:bg-gray-900 dark:bg-opacity-50">
      <h1 className="text-center mb-8 text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
        Marcas que confían en <span className="text-[#007aff]">Nosotros</span>
      </h1>
      <ScrollingBanner shouldPauseOnHover gap="75px">
        {logos.map(({ key, logo }) => (
          <div
            key={key}
            className="flex items-center justify-center text-foreground"
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
            style={{
              filter: hoveredLogo === key ? "grayscale(0%)" : "grayscale(100%)",
              transform: hoveredLogo === key ? "scale(1.3)" : "scale(1)",
              transition: "filter 0.3s ease, transform 0.3s ease",
              width: "250px",
              height: "125px",
            }}
          >
            <img src={logo.src} alt={key} />
          </div>
        ))}
      </ScrollingBanner>
    </section>
  );
}
