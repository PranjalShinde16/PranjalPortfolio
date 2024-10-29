import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/image_pranjal_1.PNG";
import projImg2 from "../assets/img/image_pranjal_2.PNG";
import projImg3 from "../assets/img/image_pranjal_3.PNG";
import projImg4 from "../assets/img/image_pranjal_4.PNG";
import projImg5 from "../assets/img/image_pranjal_5.PNG";
import projImg6 from "../assets/img/image_pranjal_6.PNG";
import projImg7 from "../assets/img/image_pranjal_7.PNG";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const PProjects = () => {
  const projects1 = [
    {
      title: "Internship at OTPLess",
      description: "Web Design and Development",
      imgUrl: projImg1,
      link: "https://otpless.com/docs/introduction",
      codelink: "https://github.com/PranjalShinde16/OTPLess",
    },
    {
      title: "Gourmet Site",
      description: "Web Design & Development",
      imgUrl: projImg2,
      link: "https://pranjalshinde16.github.io/Food-Website/",
      codelink: "https://github.com/PranjalShinde16/Food-Website",
    },
    {
      title: "Pet Care and Innovation",
      description: "Web Design & Development",
      imgUrl: projImg3,
      link: "https://pranjalshinde16.github.io/Tindog-Website-Trial/",
      codelink: "https://github.com/PranjalShinde16/Tindog-Website-Trial",
    },
  ];

  const projects2 = [
    {
      title: "Ecommerce Site",
      description: "Collaborative:Website Design & Development",
      imgUrl: projImg4,
      link: "https://gitlab.com/jp2720728/React-based-complete-application",
      codelink: "https://gitlab.com/jp2720728/React-based-complete-application",
    },

    {
      title: "Designing Porfolio",
      description: "Must View Graphic Design Portfolio",
      imgUrl: projImg6,
      link: "https://drive.google.com/file/d/1WkAhXYPW3d_afCnsYqh-8z9RfmZ_u8pB/view?usp=sharing",
      codelink:
        "https://drive.google.com/file/d/1WkAhXYPW3d_afCnsYqh-8z9RfmZ_u8pB/view?usp=sharing",
    },
    {
      title: "Car Price Prediction Model",
      description: "Machine Learning and Artificial Intelligence Project",
      imgUrl: projImg7,
      link: "https://github.com/PranjalShinde16/Car-Price-Prediction-Model",
      codelink: "https://github.com/PranjalShinde16/Car-Price-Prediction-Model",
    },
  ];

  const projects3 = [
    {
      title: "Product Ideation",
      description: "Creating product ideation",
      imgUrl: projImg5,
      link: "https://drive.google.com/file/d/1DET1VqJ01XuYdWln0nhtMav6fRYKyxa6/view?usp=drive_link",
      codelink:
        "https://drive.google.com/file/d/1DET1VqJ01XuYdWln0nhtMav6fRYKyxa6/view?usp=drive_link",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p style={{ marginBottom: "40px" }}>
                    Presenting a range of projects that transform ideas into
                    engaging solutions
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
