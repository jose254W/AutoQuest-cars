import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const FormContainer = styled.form`
  min-height: 4.3em;
  ${tw`
    grid
    justify-start
    items-start
    rounded-md
    bg-white
    pt-8
    pb-1
    pr-1
    pl-8
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `};
   
`;



const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: #f8f8f8;
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  padding: 5px 8px;
  border-radius: 5px;
  border: none;
  background-color: #0077ff;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0066cc;
  }
`;

export function BookingForm(props: { onHide: () => void; }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Do something with the form data, such as send it to a server with AJAX
    console.log(name, email, contact, location);
    // Reset the form fields
    setName('');
    setEmail('');
    setContact('');
    setLocation('');
    // Hide the form
    props.onHide();
  };

  const handleNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setContact(e.target.value);
  };

  const handleLocationChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLocation(e.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input type="text" name="name" value={name} onChange={handleNameChange} required />
      <Label htmlFor="email">Email:</Label>
      <Input type="email" name="email" value={email} onChange={handleEmailChange} required />
      <Label htmlFor="contact">Contact:</Label>
      <Input type="text" name="contact" value={contact} onChange={handleContactChange} required />
      <Label htmlFor="location">Location:</Label>
      <Input type="text" name="location" value={location} onChange={handleLocationChange} required />
      <div></div>
      <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
    </FormContainer>
  );
}
