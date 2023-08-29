import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo } from './Data';
// import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      <HeroSection
        lightBg={homeObjOne.lightBg}
        lightText={homeObjOne.lightText}
        lightTextDesc={homeObjOne.lightTextDesc}
        topLine={homeObjOne.topLine}
        headline={homeObjOne.headline}
        description={homeObjOne.description}
        buttonLabel={homeObjOne.buttonLabel}
        imgStart={homeObjOne.imgStart}
        img={homeObjOne.img}
        alt={homeObjOne.alt}
      />
      <HeroSection
        lightBg={homeObjTwo.lightBg}
        lightText={homeObjTwo.lightText}
        lightTextDesc={homeObjTwo.lightTextDesc}
        topLine={homeObjTwo.topLine}
        headline={homeObjTwo.headline}
        description={homeObjTwo.description}
        buttonLabel={homeObjTwo.buttonLabel}
        imgStart={homeObjTwo.imgStart}
        img={homeObjTwo.img}
        alt={homeObjTwo.alt}
      />
    </>
  );
}

export default Products;
