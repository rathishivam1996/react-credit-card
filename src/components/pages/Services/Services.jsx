import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree } from './Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <Pricing />
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
        lightBg={homeObjThree.lightBg}
        lightText={homeObjThree.lightText}
        lightTextDesc={homeObjThree.lightTextDesc}
        topLine={homeObjThree.topLine}
        headline={homeObjThree.headline}
        description={homeObjThree.description}
        buttonLabel={homeObjThree.buttonLabel}
        imgStart={homeObjThree.imgStart}
        img={homeObjThree.img}
        alt={homeObjThree.alt}
      />
    </>
  );
}

export default Services;
