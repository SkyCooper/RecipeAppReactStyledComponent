import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import "./Home.style";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";
import notFound from "../../assets/notFound.png";

const Home = () => {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Select Meal","Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const urlv2 = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  
  // const urlv1 = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  

  const getMeal = async () => {
    if (query) {
      try {
        const { data } = await axios(urlv2);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the form");
    }
  };

  console.log(recipes);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getMeal={getMeal}
      />

      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (
        <>
          <HeaderText>The Food can not be found</HeaderText>
          <ImgDiv>
            <HomeImg src={notFound} />
          </ImgDiv>
        </>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
