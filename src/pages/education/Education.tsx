import "./Education.scss";
import { educations } from "./educationData";

import {
  IconMapPin,
  IconClockHour3,
  IconBuildingBank,
  IconLink,
  IconSchool,
  IconBook2,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const Education = () => {
  return (
    <div className="education-wrapper">
      <div className="education-inner-wrapper">
        {educations.map((education) => (
          <div className="modal-wrapper">
            <div className="modal-inner-wrapper">
              <div key={education?._id} className="modal-details">
                <NavLink
                  to={education?.institution_link || ""}
                  target="__blank"
                >
                  <h3 className="institution-name">
                    {education?.institution_name}{" "}
                    <IconLink size="12px" className="margin-top-5" />
                  </h3>
                </NavLink>
                <p className="institution-details">
                  <IconMapPin className="modal-icons" />
                  {education?.institution_location}
                </p>
                {education?.faculty_name && (
                  <p className="institution-details">
                    <IconBuildingBank className="modal-icons" />
                    {education?.faculty_name}
                  </p>
                )}
                {education?.degree_name && (
                  <p className="institution-details">
                    <IconSchool className="modal-icons" />
                    {education?.degree_name}
                  </p>
                )}
                {education?.cgpa && (
                  <p className="institution-details">
                    <IconBook2 className="modal-icons" />
                    {education?.cgpa}
                  </p>
                )}
                <p className="institution-details">
                  <IconClockHour3 className="modal-icons" />
                  {education?.gradution_time}
                </p>
                {education?.institutional_works &&
                  education.institutional_works.map((work, index) => (
                    <div key={index} className="institution-works">
                      <ul>
                        <li>{work.work_name}</li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
