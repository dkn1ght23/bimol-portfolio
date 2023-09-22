import "./ExtracurricularActivity.scss";
import { extracurricular } from "./ExtracurricularData";

const ExtracurricularActivity = () => {
  return (
    <div className="extracurricular-wrapper">
      <div className="extracurricular-inner-wrapper">
        {extracurricular.map((activity) => (
          <div className="activity-wrapper" key={activity?._id}>
            <h3 className="activity-name">
              <li>
                {activity?.activity_title}
                {" - "}
                <span className="activity-position">
                  {activity?.activity_position}
                </span>
              </li>
            </h3>
            <div className="activity-description">
              <p className="activity-location">{activity?.activity_location}</p>
              <p className="activity-details">{activity?.activity_details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtracurricularActivity;
