import React from "react";
import "./EduationCard.scss";
import { Divider } from "antd";

interface EducationeCard {
  _id?: number;
  degree_name?: string;
  institution_name?: string;
  gradution_time?: string;
}

const Card: React.FC<{ data: EducationeCard }> = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div className="card-description">
        <p className="card-name">{data.gradution_time}</p>
        <Divider type="vertical" className="card-divider" />
        <p className="card-title">{data.degree_name}</p>
        <p className="card-name">{data.institution_name}</p>
        <div className="read-more">
          READ MORE
          <span>
            <Divider type="vertical" className="readme-divider" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
