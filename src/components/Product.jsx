import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ recipe }) => {
  const { label, image } = recipe;
  // const info = {
  //   label,
  //   image,
  //   calories,
  //   ingredientLines,
  //   totalWeight,
  //   totalTime,
  // };
  console.log(recipe)
  console.log(label)
  const navigate = useNavigate();
  return (
    <Card
      className="ms-3 mt-3 text-center border border-1 border-light product"
      style={{ minwidth: "18rem", background: "rgba(32, 25, 25, 0.482)" }}
    >
      <Card.Title className="text-truncate fs-4 py-2 text-light">
        {label}
      </Card.Title>
      <Card.Img
        className="border border-2 border-light cardImg "
        variant="top"
        src={image}
        style={{ width: "15rem", height: "auto", margin: "auto" }}
      />
      <Card.Body>
        <Button
          variant="warning"
          onClick={() => navigate(`/detail/${label}`, { state: recipe })}
          // onClick={() => navigate(`/detail/${label}`, { state: info })}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
