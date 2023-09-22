import { useState } from "react";
import "./Education.scss";
import { educations } from "./educationData";
import EducationCard from "../../components/education-card/EducationCard";
import { Button, Col, Modal, Row } from "antd";
import {
  IconMapPin,
  IconClockHour3,
  IconBuildingBank,
  IconLink,
  IconSchool,
  IconBook2,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

interface IEducation {
  _id: number;
  institution_name: string;
  institution_link: string;
  institution_location: string;
  faculty_name?: string;
  degree_name?: string;
  gradution_time: string;
  cgpa?: string;
  institutional_works?: InstitutionalWork[];
}

interface InstitutionalWork {
  _id: number;
  work_name: string;
}

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IEducation>();

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
    console.log(data, "data");
  };

  return (
    <div className="education-wrapper">
      <div className="education-inner-wrapper">
        <Row gutter={50}>
          {educations.map((data) => (
            <Col
              key={data._id}
              span={24}
              className="margin-bottom-25"
              onClick={() => handleCardClick(data)}
            >
              <EducationCard data={data} />
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
              <NavLink to={modalData?.institution_link || ""} target="__blank">
                <h3 className="institution-name">
                  {modalData?.institution_name}{" "}
                  <IconLink size="12px" className="margin-top-5" />
                </h3>
              </NavLink>
              <p className="institution-details">
                <IconMapPin className="modal-icons" />
                {modalData?.institution_location}
              </p>
              {modalData?.faculty_name && (
                <p className="institution-details">
                  <IconBuildingBank className="modal-icons" />
                  {modalData?.faculty_name}
                </p>
              )}
              {modalData?.degree_name && (
                <p className="institution-details">
                  <IconSchool className="modal-icons" />
                  {modalData?.degree_name}
                </p>
              )}
              {modalData?.cgpa && (
                <p className="institution-details">
                  <IconBook2 className="modal-icons" />
                  {modalData?.cgpa}
                </p>
              )}
              <p className="institution-details">
                <IconClockHour3 className="modal-icons" />
                {modalData?.gradution_time}
              </p>
              {modalData?.institutional_works &&
                modalData.institutional_works.map((work, index) => (
                  <div key={index} className="institution-works">
                    <ul>
                      <li>{work.work_name}</li>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Education;
