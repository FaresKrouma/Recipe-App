import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
   const [data, setData] = useState([]);
   const [query, setQuery] = useState("chicken");

   const APIPROFILE = "a3b27425";
   const APIKEY = "939c756c3fd1fa9dff4caa7e496e1852";
   const API = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APIPROFILE}&app_key=${APIKEY}`;

   useEffect(() => {
      fetch(API)
         .then((resp) => resp.json())
         .then((respData) => {
            setData(respData.hits);
         });
      console.log(query);
   }, [query]);

   return (
      <DivElement>
         <Header setQuery={setQuery} />
         <div className="recipes-container">
            {data.length !== 0 &&
               data.map((element, index) => (
                  <Recipe recipeData={element.recipe} key={index} />
               ))}
         </div>
      </DivElement>
   );
}

export default App;

const DivElement = styled.div`
   display: flex;
   flex-direction: column;
   .recipes-container {
      display: flex;
      justify-content: center;
      margin-top: 0rem;
      align-items: flex-start;
      flex-wrap: wrap;
   }
`;
