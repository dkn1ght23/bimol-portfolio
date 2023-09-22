import "./ResearchWork.scss";
import { publications, researches } from "./ResearchData";
import { IconLink } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const ResearchWork = () => {
  return (
    <div className="research-wrapper">
      <div className="research-inner-wrapper">
        <div className="research-type">
          <h3 className="research-type-title">Publications</h3>
          {publications.map((paper) => (
            <div key={paper?._id}>
              <div className="research-details">
                <h3 className="paper-name">
                  <div className="disc-style">
                    <li>
                      <NavLink to={paper?.paper_link}>
                        {paper?.paper_title}
                      </NavLink>
                      <IconLink size="12px" style={{ marginLeft: "5px" }} />
                    </li>
                  </div>
                </h3>
                <p className="paper-details">{paper?.paper_contributors}</p>
                <p className="paper-details">{paper?.publication_site}</p>
                {paper?.paper_abstract && (
                  <p className="paper-abstract">{paper?.paper_abstract}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="research-type">
          <h3 className="research-type-title margin-0">Research & Projects</h3>
          {researches.map((paper) => (
            <div key={paper?._id}>
              <div className="research-details">
                <h3 className="paper-header">{paper?.paper_header}</h3>
                <h3 className="paper-name">
                  <div className="disc-style">
                    <li>
                      <NavLink to={paper?.paper_link}>
                        {paper?.paper_title}
                      </NavLink>
                      <IconLink size="12px" style={{ marginLeft: "5px" }} />
                    </li>
                  </div>
                </h3>
                <p className="paper-details">{paper?.paper_contributors}</p>
                <p className="paper-details">{paper?.publication_site}</p>
                {paper?.paper_abstract && (
                  <p className="paper-abstract">{paper?.paper_abstract}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchWork;
