import React, { useState } from "react";
import styled from "styled-components";

function Header({ setQuery }) {
   const [searchValue, setSearchValue] = useState("");

   const handleClick = () => {
      setQuery(searchValue);
      setSearchValue("");
   };

   const handleChange = (e) => {
      setSearchValue(e.target.value);
   };

   return (
      <DivElement>
         <input
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
            onChange={handleChange}
            value={searchValue}
            placeholder="Search Meal .."
            autoComplete="off"
            type="text"
         />

         <button onClick={handleClick}>Search</button>
      </DivElement>
   );
}

export default Header;

const DivElement = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin: 1rem 1rem 1rem 0;

   & button {
      border-radius: 15px;
      background-color: #ff694f;
      border: none;
      font-size: 1rem;
      padding: 0.5rem 1rem;
   }
   & input {
      padding: 0.4rem 1rem;
      margin: 1rem 0.5rem;
      width: 400px;
      border-radius: 15px;
      background-color: #fff;
      box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.5);
      font-size: 1.1rem;
      border: none;
      &::placeholder,
      :focus {
         border: none;
         outline: none;
      }
   }
`;
