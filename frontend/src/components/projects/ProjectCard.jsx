import { Col } from "react-bootstrap";
import React from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div>
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="Image Here" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    </div>
  );
};
