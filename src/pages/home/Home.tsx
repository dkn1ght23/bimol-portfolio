import "./Home.scss";
import { Button, Col, Image, Row } from "antd";
import user_image from "../../assets/images/user-image.jpeg";
import orcid from "../../assets/images/orcid.png";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Typewriter from "./TypeWriter";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-inner-wrapper">
        <Row gutter={{ md: 60 }} align="middle" justify="center">
          <Col span={24} md={{ span: 12 }} className="image-col">
            <div className="user-image-wrapper">
              <Image
                src={user_image}
                preview={false}
                className="user-image"
                alt="Home Image"
              />
            </div>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <div className="user-details-wrapper">
              <h3 className="user-hi">Hello There,</h3>

              <Typewriter
                toRotate={[
                  "I'm Bimol Nath Roy",
                  "A Chemical Engineering Graduate",
                ]}
                period={2000}
              />

              <div className="user-about-me">
                <Button className="about-me-button">About Me</Button>
              </div>

              <div className="user-social-media-wrapper">
                <div className="user-social-media">
                  <Link
                    to="https://www.linkedin.com/in/bimolnr/"
                    target="_blank"
                    aria-label="Linkedin"
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <LinkedinFilled className="user-icons" />
                  </Link>
                </div>

                <div className="user-social-media">
                  <Link
                    to="https://orcid.org/0000-0001-5387-5036"
                    target="_blank"
                    aria-label="orcid"
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <Image
                      src={orcid}
                      width={21}
                      height={21}
                      preview={false}
                      className="user-icons"
                      alt="Orcid Logo"
                    />
                  </Link>
                </div>
                <div className="user-social-media">
                  <Link
                    to="https://github.com/bimolnr"
                    target="_blank"
                    aria-label="github"
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <GithubOutlined className="user-icons" />
                  </Link>
                </div>
                <div className="user-social-media">
                  <Link
                    to="https://www.facebook.com/bimolnr"
                    target="_blank"
                    aria-label="facebook"
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <FacebookOutlined className="user-icons" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
