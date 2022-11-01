import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormSelect } from "react-bootstrap";
import Product from "../components/Product";

const Home = () => {
  const [food, setFood] = useState("");
  const [mealType, setMealType] = useState("");
  const [products, setProducts] = useState([]);

  const appKey = process.env.REACT_APP_API_KEY;
  const appID = process.env.REACT_APP_API_ID;

  const url = `https://api.edamam.com/search?q=${food}&app_id=${appID}&app_key=${appKey}&mealType=${mealType}`;

  const getFoods = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setProducts(data.hits);
    } catch (error) {
      console.log("Api error");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    getFoods();
  };
  return (
    <div className="w-75 m-auto">
      <Form
        onSubmit={handleClick}
        className="container w-50 d-flex gap-2 mt-4 form"
        style={{ minWidth: "30rem" }}
      >
        <FormSelect onChange={(e) => setMealType(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="teatime">Tea Time</option>
          <option value="snack">Snack</option>
        </FormSelect>
        <input
          type="text"
          placeholder="food name"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
        <Button variant="warning" onClick={handleClick}>
          Search
        </Button>
      </Form>
      <div className="row m-auto">
        {products.map((item, index) => {
          return <Product key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
