import "./Experience.scss";
import { experiences } from "./ExperienceData";

import {
  IconMapPin,
  IconClockHour3,
  IconBuildingBank,
  IconLink,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const Experience = () => {
  return (
    <div className="experience-wrapper">
      <div className="experience-inner-wrapper ">
        {experiences.map((experience) => (
          <div className="modal-wrapper">
            <div className="modal-inner-wrapper">
              <div key={experience?._id} className="modal-details">
                <h3 className="institution-name">
                  {experience?.position_name}
                </h3>
                <NavLink
                  to={experience?.institution_link || ""}
                  target="__blank"
                >
                  <p className="institution-link-details">
                    <IconBuildingBank
                      className="modal-icons"
                      style={{ marginRight: "10px" }}
                    />
                    {experience?.institution_name}
                    <IconLink
                      size="13px"
                      style={{ marginLeft: "5px", marginTop: "5px" }}
                    />
                  </p>
                </NavLink>
                <p className="institution-details">
                  <IconMapPin className="modal-icons" />
                  {experience?.institution_location}
                </p>
                <p className="institution-details">
                  <IconClockHour3 className="modal-icons" />
                  {experience?.working_time}
                </p>
                {experience?.institutional_works.map((work, index) => (
                  <div key={index} className="institution-works">
                    <ul>
                      <li>{work.work_name}</li>
                    </ul>
                  </div>
                ))}

                {experience?.supervisor && (
                  <div className="institution-works">
                    <ul>
                      <li>Supervisor:</li>
                      {experience?.supervisor.map((supervisor, index) => (
                        <div key={index} className="institution-works">
                          <ul>
                            <li style={{ fontWeight: 600 }}>
                              {supervisor.name}
                            </li>
                            {supervisor.position}
                          </ul>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
