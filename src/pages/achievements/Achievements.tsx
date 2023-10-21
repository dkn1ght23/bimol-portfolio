import "./Achievements.scss";
import { achievements, certifications } from "./achievementsData";
import { IconLink } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const Achievements = () => {
  return (
    <div className="achievements-wrapper">
      <div className="achievements-inner-wrapper">
        <div className="achievements-type">
          <h3 className="achievements-type-title">Scholarship and Awards</h3>
          {achievements.map((achievement) => (
            <h3 className="achievements-details" key={achievement?._id}>
              <div className="achievements-details-inner">
                <li>
                  {achievement?.name}:{" "}
                  <span className="description">{achievement?.details}</span>
                </li>
              </div>
            </h3>
          ))}
        </div>

        <div className="achievements-type">
          <h3 className="achievements-type-title">
            Licenses and Certifications
          </h3>
          {certifications.map((certification) => (
            <h3 className="achievements-details" key={certification?._id}>
              <div className="achievements-details-inner">
                <li>
                  <NavLink
                    to={certification?.certificate_link}
                    target="__blank"
                  >
                    {certification?.name}:
                    <span className="description">
                      {""} authorized by {""}
                    </span>
                    {certification?.authorized_by}
                    <span className="description">
                      {""} and offered through {""}
                    </span>
                    {certification?.course_by}{" "}
                    <IconLink size="12px" style={{ marginLeft: "5px" }} />
                  </NavLink>
                </li>
              </div>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
