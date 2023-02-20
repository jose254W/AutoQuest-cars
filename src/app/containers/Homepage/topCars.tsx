import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import { ICar } from "../../../typings/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";



const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;


export function TopCars () {

const [current, setCurrent] = useState(0);

const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

const testCar: ICar = {
    name: "Audi S3 car",
    mileage: "20k",
    thumbnailSrc : "https://www.motortrend.com/uploads/sites/10/2017/10/2018-audi-s3-premium-plus-sedan-angular-front.png",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "petro"
};

const testCar2: ICar = {
    name: "Honda City 5 Seater",
    mileage: "10k",
    thumbnailSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWz5vkW7Gwl57DUxg5RJfKnikuD3qJz76zbkorWZuJapqI1s8-4IcpDoKGnNo1z2MOJ0&usqp=CAU",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "petro"
};

const testCar3: ICar = {
    name: "Subaru Outback",
    mileage: "40k",
    thumbnailSrc : "data:image/jpeg;base64,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",
    dailyPrice: 100,
    monthlyPrice: 3000,
    gearType: "Auto",
    gas: "petro"
};

const cars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar3} />,
    <Car {...testCar3} />,
    <Car {...testCar3} />,
]

const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return(
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            <CarsContainer>
            <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                900: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
              />
            <Dots value={current} onChange={setCurrent} number={numberOfDots}/>
            </CarsContainer>
        </TopCarsContainer>
    )
};