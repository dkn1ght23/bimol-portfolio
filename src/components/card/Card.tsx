import React from "react";
import "./Card.scss";
import { Divider } from "antd";

interface ExperienceCard {
  _id?: number;
  position_name?: string;
  institution_name?: string;
  working_time?: string;
}

const Card: React.FC<{ data: ExperienceCard }> = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div className="card-description">
        <p className="card-name">{data.working_time}</p>
        <Divider type="vertical" className="card-divider" />
        <p className="card-title">{data.position_name}</p>
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
