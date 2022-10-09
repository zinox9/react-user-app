import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
   z-index: 10;
   background: white;
   width: 50%;
   padding: 1rem 2rem;
   border-radius: 10px;

   div {
      display: flex;
      flex-direction: column;
      margin: 2rem auto;
      width: 100%;
   }

   label {
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: capitalize;
      margin-bottom: 0.6rem;
   }

   input {
      border-color: #1273af;
      font-size: 1.2rem;
      border-radius: 10px;
      padding: 0.5rem;
      appearance: none;
   }

   input[type="number"]::-webkit-inner-spin-button,
   input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
   }

   input[type="number"] {
      -moz-appearance: textfield;
   }

   input:focus {
      background: #aaffff;
   }
`;

const Button = styled.button`
   background: #1273af;
   color: white;
   font-size: 1rem;
   padding: 0.5rem 0;
   border-radius: 10px;
   width: 100%;
`;

export default function UserInput({ addUsers, showModal }) {
   const [name, setName] = useState("");
   const [age, setAge] = useState(0);

   const handleNameChange = (e) => {
      setName(e.target.value);
   };

   const handleAgeChange = (e) => {
      setAge(e.target.value);
   };

   const handleAddUser = (e) => {
      e.preventDefault();
      console.log("Handled Add User", name, age);

      if (name.trim().length === 0 || age <= 0) {
         console.log("Show Invalid Modal");
         showModal(
            name.trim().length === 0
               ? "Pakka Yahi Name h ?"
               : "Age to sahi daal do"
         );
      } else {
         addUsers(name, age);
         setName("");
         setAge(0);
      }
   };

   return (
      <Form>
         <div>
            <label htmlFor="name">Enter your name: </label>
            <input
               type="text"
               name="name"
               onChange={handleNameChange}
               value={name}
               id="name"
               required
            />
         </div>
         <div>
            <label htmlFor="age">Enter your age: </label>
            <input
               type="number"
               onChange={handleAgeChange}
               value={age}
               name="age"
               id="age"
               required
            />
         </div>
         <div>
            <Button onClick={handleAddUser}>Add User!</Button>
         </div>
      </Form>
   );
}
