import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Detail = () => {
  const { state: food } = useLocation();
  const navigate = useNavigate();
  console.log(food);
  return (
    <Card
      className="p-4 w-75 m-auto mt-5 text-light"
      style={{ minheight: "30vh", background: "rgba(32, 25, 25, 0.482)" }}
    >
      <div className="d-flex justify-content-between w-100 m-auto">
        <div>
          <Card.Title className="text-truncate fs-2 mb-5">{food.label}</Card.Title>
          <Card.Text>Calories : {food.calories}</Card.Text>
          <Card.Text>Meal Type : {food.mealType}</Card.Text>
          <Card.Text>Weight : {food.totalWeight}</Card.Text>
        </div>
        <div>
          <Card.Img
          className="border rounded-5"
            variant="top"
            src={food.image}
            style={{ width: "25rem", height: "auto" }}
          />
        </div>
        <div>
          <ul>
            <p className="fs-2 mb-4">Ingredients</p>
            {food.ingredientLines.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>

      <Card.Body className="text-center mt-3">
        <Button className="fs-3" variant="warning" onClick={() => navigate("/")}>
        Home
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Detail;
