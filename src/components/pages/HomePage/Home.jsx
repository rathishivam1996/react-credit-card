import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Home() {
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
      <Pricing />
      <HeroSection
        lightBg={homeObjFour.lightBg}
        lightText={homeObjFour.lightText}
        lightTextDesc={homeObjFour.lightTextDesc}
        topLine={homeObjFour.topLine}
        headline={homeObjFour.headline}
        description={homeObjFour.description}
        buttonLabel={homeObjFour.buttonLabel}
        imgStart={homeObjFour.imgStart}
        img={homeObjFour.img}
        alt={homeObjFour.alt}
      />
    </>
  );
}

export default Home;
