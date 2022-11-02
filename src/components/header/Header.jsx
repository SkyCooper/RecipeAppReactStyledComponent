import React from "react";
import "./Header.style";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setSelectedMeal, getMeal, mealType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getMeal();
  };
  
  return (
    <HeaderContainer onSubmit={handleSubmit}>
      <MainHeader>Cooper Recipe App</MainHeader>
      <FormContainer>
        <Select
          name="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
        <FoodInput
          type="text"
          placeholder="food"
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button type="submit">search</Button>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
