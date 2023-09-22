import "./Home.scss";
import { Button, Col, Image, Row } from "antd";
import user_image from "../../assets/images/user-image.jpeg";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Typewriter from "./TypeWriter";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-inner-wrapper">
        <Row gutter={60} align="middle">
          <Col span={12}>
            <div className="user-details-wrapper">
              <h3 className="user-hi">Hi There,</h3>

              <Typewriter
                toRotate={["I'm Bimol Nath Roy", "I'm a Research Assistant"]}
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
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <LinkedinFilled className="user-icons" />
                  </Link>
                </div>
                <div className="user-social-media">
                  <Link
                    to="https://www.linkedin.com/in/bimolnr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <GithubOutlined className="user-icons" />
                  </Link>
                </div>
                <div className="user-social-media">
                  <Link
                    to="https://www.linkedin.com/in/bimolnr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <TwitterOutlined className="user-icons" />
                  </Link>
                </div>
                <div className="user-social-media">
                  <Link
                    to="https://www.linkedin.com/in/bimolnr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <InstagramOutlined className="user-icons" />
                  </Link>
                </div>
                <div className="user-social-media">
                  <Link
                    to="https://www.linkedin.com/in/bimolnr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-link"
                  >
                    <FacebookOutlined className="user-icons" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="user-image-wrapper">
              <Image
                src={user_image}
                preview={false}
                className="user-image"
                width={380}
                height={380}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
