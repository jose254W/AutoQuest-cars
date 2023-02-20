import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="jeep" />
      </CarContainer>
      <InfoContainer>
        <Title>Discover Your Next Adventure on Wheels with AutoQuest</Title>
        <InfoText>
        AutoQuest is a full-service automotive destination that offers both car sales and rentals. Our goal is to provide you with the ultimate driving experience, whether you're in the market for a new vehicle or looking to rent one for a weekend getaway. With an extensive selection of vehicles to choose from, including everything from sporty convertibles to spacious SUVs, we're confident that you'll find the perfect car to meet your needs and budget. Our team of friendly and knowledgeable professionals is committed to providing outstanding customer service, and our streamlined rental process and well-maintained vehicles ensure a safe and enjoyable driving experience. Thank you for choosing AutoQuest as your automotive partner, and we look forward to helping you find your next adventure on wheels.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}