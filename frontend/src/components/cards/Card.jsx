import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div className="card-wrapper">
      <img
        src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/300/200"
        alt="Card Image"
      />
      <h1>Card Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, minus.
        Nulla quae quaerat maxime, harum eos odit ab.
      </p>
      <a href="cardpage">Learn more.</a>
    </div>
  );
};
