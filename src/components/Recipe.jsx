import React, { useState } from "react";
import styled, { css } from "styled-components";

function Recipe({ recipeData: { label, image, calories, ingredients } }) {
   const [isVisible, setIsVisible] = useState(false);

   const handleClick = () => {
      setIsVisible(!isVisible);
   };
   const ingredientsList = ingredients.map((element, index) => {
      return (
         isVisible && (
            <li key={index}>
               <img src={element.image} />
               <p>{element.text}</p>
            </li>
         )
      );
   });

   return (
      <DivElement>
         {!isVisible ? (
            <React.Fragment>
               <img src={image} alt={label} />
               <div className="animation">
                  <h1>{label}</h1>
                  <h4>Calories : {calories.toFixed(1)}</h4>
               </div>
               <div className="ingredients-container">
                  <ul onClick={handleClick}>
                     <button
                        dangerouslySetInnerHTML={{
                           __html: isVisible
                              ? "- Ingredients "
                              : "+ Ingredients ",
                        }}
                        onClick={handleClick}
                     ></button>
                  </ul>
               </div>
            </React.Fragment>
         ) : (
            <div className="ingredients-container">
               <ul onClick={handleClick}>
                  <button
                     dangerouslySetInnerHTML={{
                        __html: isVisible ? "- Ingredients" : "+ Ingredients",
                     }}
                     onClick={handleClick}
                  ></button>
               </ul>
               {ingredientsList}
            </div>
         )}
      </DivElement>
   );
}

export default Recipe;

const DivElement = styled.div`
   display: flex;
   width: 22%;
   position: relative;
   margin: 2rem;
   /* align-items: center; */
   justify-content: center;
   animation: ingredients 0.5s;
   box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
   background-color: #ffe6d2;
   flex-direction: column;
   overflow: hidden;
   text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
   border-radius: 15px;
   & div {
      line-height: 1;
      margin: 0.5rem 0.2rem 0rem 0.8rem;
   }
   & div h4 {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 400;
      margin-top: 0.5rem;
   }
   & div img {
      height: 250px;
      width: 100%;
      object-fit: cover;
      border-radius: 15px 15px 0 0;
   }
   .animation {
      animation: ingredients 0.5s;
   }
   .ingredients-container {
      margin: 0.8rem;
      font-weight: 300;
      animation: ingredients 0.5s;
      line-height: 1;
      height: 100%;

      & img {
         width: 40px;
         height: 40px;
         border-radius: 50%;
         margin-right: 0.4rem;
         object-fit: cover;
      }
      & ul {
         padding: 0;
         margin: 0;
         list-style-type: none;
      }
      & li {
         display: flex;
         align-items: center;
         margin: 0.5rem;
      }
      & button {
         border: none;
         margin-right: 0.2rem;
         background-color: transparent;
         font-weight: bold;
         color: #ff4747;
         cursor: pointer;
      }
      @keyframes ingredients {
         0% {
            transform: translateX(-100%);
            opacity: 0;
         }
         100% {
            transform: translateX(0);
            opacity: 1;
         }
      }
   }
`;
