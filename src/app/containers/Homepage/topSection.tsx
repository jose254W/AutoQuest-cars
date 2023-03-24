import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../../components/responsive";
import MercedesCarImg from "../../../assets/Legacy.webp";
import BlobImg from "../../../assets/blob.svg";
import { Button } from "../../components/button";
import Modal from "react-modal";
import { BookingForm } from "../../components/booking/BookingForms";

Modal.setAppElement("#root");

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;
const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;
const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;
const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-visible
    max-h-12
    text-gray-800
  `};
`;const BlobContainer = styled.div`
width: 20em;
height: 10em;
position: absolute;
right: -5em;
top: -9em;
z-index: -1;
transform: rotate(-30deg);
img {
  width: 100%;
  height: auto;
  max-height: max-content;
}
@media (min-width: ${SCREENS.sm}) {
  width: 40em;
  max-height: 10em;
  right: -9em;
  top: -16em;
  transform: rotate(-25deg);
}
@media (min-width: ${SCREENS.lg}) {
  width: 50em;
  max-height: 30em;
  right: -7em;
  top: -15em;
  transform: rotate(-30deg);
}
@media (min-width: ${SCREENS.xl}) {
  width: 70em;
  max-height: 30em;
  right: -15em;
  top: -25em;
  transform: rotate(-20deg);
}
`;
const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;
const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
    backgroundColor:"rgb(248 113 113)",
    zIndex: 9999,
  },
};

export function TopSection() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
      <TopSectionContainer>
        <LeftContainer>
          <Slogan>Drive Your Dreams: Where Your Perfect Car Awaits</Slogan>
          <Description>
          Discover your next adventure on wheels with our unbeatable car selection and unparalleled customer service - your one-stop-shop for all things automotive.
          </Description>
          <ButtonsContainer>
          <Button onClick={handleOpenModal} text="Book Your Ride">Book Your Ride</Button>
      <Modal isOpen={showModal} onRequestClose={handleCloseModal} style={modalStyles}>
        <BookingForm onFormSubmit={handleCloseModal} />
      </Modal>
          <Button theme="filled" text="Buy your car" ></Button>
        </ButtonsContainer>
        </LeftContainer>
        <RightContainer>
          <BlobContainer>
            <img src={BlobImg} alt="blobsvg" />
          </BlobContainer>
          <StandaloneCar>
            <img src={MercedesCarImg} alt="mercedesimg" />
          </StandaloneCar>
        </RightContainer>
      </TopSectionContainer>
    );
  }