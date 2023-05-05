import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { Car } from "../car";
import { TopCars } from "../../containers/Homepage/topCars";


const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;

const SearchContainer = styled.div`
  ${tw`
    relative
    w-56
    md:w-96
    ml-4
  `};
`;

const SearchInput = styled.input`
  ${tw`
    w-full
    h-10
    pl-4
    pr-8
    rounded-lg
    border-2
    border-gray-300
    focus:border-blue-500
    outline-none
  `};
`;

const SearchIconContainer = styled.div`
  ${tw`
    absolute
    top-0
    right-0
    h-full
    w-12
  `};
`;

const SearchIcon = styled.i`
  ${tw`
    w-full
    h-full
    text-gray-400
    hover:text-gray-500
    cursor-pointer
    text-2xl
    flex
    items-center
    justify-center
  `};
`;

export function NavItems(props: { topcars: string[] }) {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCar, setFilteredCar] = useState<string[]>(props.topcars);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filtered = query !== "" ? props.topcars.filter((name: string) => name.toLowerCase().includes(query)) : props.topcars;
    setFilteredCar(filtered);
    setSearchQuery(query);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting search query: ${searchQuery}`);
  };
  console.log(searchQuery)
  console.log(props.topcars)

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#home">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="#cars">Cars</a>
          </NavItem>
          <NavItem menu>
            <a href="#service">Services</a>
          </NavItem>
          <NavItem menu>
            <a href="#contact">Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="#home">Home</a>
      </NavItem>
      <NavItem>
        <a href="#cars">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#service">Services</a>
      </NavItem>
      <NavItem>
        <a href="#contact">Contact Us</a>
      </NavItem>
      <form onSubmit={handleSubmit}>
              <SearchInput className="placeholder:text-red-500 "
                type="text"
                placeholder="Coming Soon!"text-red
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <SearchIconContainer>
                <SearchIcon className="ri-search-line" />
              </SearchIconContainer>
            </form>
      </ListContainer>
  )}