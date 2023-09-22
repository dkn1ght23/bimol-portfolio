import "./Experience.scss";

import { experiences } from "./ExperienceData";
import Card from "../../components/card/Card";
import { Button, Col, Modal, Row } from "antd";
import { useState } from "react";
import {
  IconMapPin,
  IconClockHour3,
  IconBuildingBank,
  IconLink,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

interface IExperience {
  _id: number;
  position_name: string;
  institution_name: string;
  institution_link: string;
  institution_location: string;
  working_time: string;
  institutional_works: InstitutionalWork[];
  core_responsibilities: CoreResponsibility[];
  supervisor: Supervisor[];
}

interface InstitutionalWork {
  _id: number;
  work_name: string;
}

interface CoreResponsibility {
  _id: number;
  responsibility_name: string;
}

interface Supervisor {
  _id: number;
  name: string;
  position: number;
}

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IExperience>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (data: any) => {
    showModal();
    setModalData(data);
  };

  return (
    <div className="experience-wrapper">
      <div className="experience-inner-wrapper ">
        <Row gutter={50}>
          {experiences.map((data) => (
            <Col
              key={data._id}
              span={24}
              className="margin-bottom-25"
              onClick={() => handleCardClick(data)}
            >
              <Card data={data} />
            </Col>
          ))}
        </Row>
      </div>
      <Modal
        open={isModalOpen}
        width={700}
        onCancel={handleCancel}
        footer={
          <Button type="primary" onClick={handleOk}>
            Close
          </Button>
        }
      >
        <div className="modal-wrapper">
          <div className="modal-inner-wrapper">
            <div key={modalData?._id} className="modal-details">
              <h3 className="institution-name">{modalData?.position_name}</h3>
              <NavLink to={modalData?.institution_link || ""} target="__blank">
                <p className="institution-link-details">
                  <IconBuildingBank
                    className="modal-icons"
                    style={{ marginRight: "10px" }}
                  />
                  {modalData?.institution_name}
                  <IconLink
                    size="13px"
                    style={{ marginLeft: "5px", marginTop: "5px" }}
                  />
                </p>
              </NavLink>
              <p className="institution-details">
                <IconMapPin className="modal-icons" />
                {modalData?.institution_location}
              </p>
              <p className="institution-details">
                <IconClockHour3 className="modal-icons" />
                {modalData?.working_time}
              </p>
              {modalData?.institutional_works.map((work, index) => (
                <div key={index} className="institution-works">
                  <ul>
                    <li>{work.work_name}</li>
                  </ul>
                </div>
              ))}

              {modalData?.core_responsibilities && (
                <div className="institution-works">
                  <ul>
                    <li>Core Responsibilities:</li>
                    {modalData?.core_responsibilities.map(
                      (responsibility, index) => (
                        <div key={index} className="institution-works">
                          <ul>
                            <li>{responsibility.responsibility_name}</li>
                          </ul>
                        </div>
                      )
                    )}
                  </ul>
                </div>
              )}

              {modalData?.supervisor && (
                <div className="institution-works">
                  <ul>
                    <li>Supervisor:</li>
                    {modalData?.supervisor.map((supervisor, index) => (
                      <div key={index} className="institution-works">
                        <ul>
                          <li style={{ fontWeight: 600 }}>{supervisor.name}</li>
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
      </Modal>
    </div>
  );
};

export default Experience;
