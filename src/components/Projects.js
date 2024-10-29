import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/image1.png";
import projImg2 from "../assets/img/image5.png";
import projImg3 from "../assets/img/image2.png";
import projImg4 from "../assets/img/image.png";
import projImg5 from "../assets/img/image_pranjal_4.PNG";
import projImg7 from "../assets/img/image_pranjal_7.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "BigBuddy AI",
      description: "Web Design and Development",
      imgUrl: projImg1,
      link : "https://bigbuddy.in"
    },
    {
      title: "BMSCE Alumini Page",
      description: "Web Design & Development",
      imgUrl: projImg2,
      link : "https://alumni.bmsce.in/",
      codelink : "https://github.com/JayeshSomala/bmsceAlumniNetwork"
    },
    {
      title: "Ise Resarch Paper submission Portal",
      description: "Web Design & Development",
      imgUrl: projImg3,
      codelink : "https://github.com/ciie-projects/research-paper-ise"
    },
  ];

  const projects2 = [
    {
      title: "Hatty-Hood Ecommerce Site",
      description: "Design & Development",
      imgUrl: projImg4,
      codelink : "https://github.com/JayeshSomala/Reacj-project"
    },
    {
      title: "Ecommerce Site",
      description: "Collaborative:Website Design & Development",
      imgUrl: projImg5,
      link : "https://gitlab.com/jp2720728/React-based-complete-application",
      codelink : "https://gitlab.com/jp2720728/React-based-complete-application"
    },
    {
      title: "Car Price Prediction Model",
      description: "Machine Learning and Artificial Intelligence Project",
      imgUrl: projImg7,
      link: "https://github.com/PranjalShinde16/Car-Price-Prediction-Model",
      codelink: "https://github.com/PranjalShinde16/Car-Price-Prediction-Model",
    }
  ];

  const projects3 = [
    {
      title: "Ecommerce Site",
      description: "Collaborative:Website Design & Development",
      imgUrl: projImg5,
      link : "https://gitlab.com/jp2720728/React-based-complete-application",
      codelink : "https://gitlab.com/jp2720728/React-based-complete-application"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p style={{marginBottom:"40px"}}>Presenting a range of projects that transform ideas into engaging solutions</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                       </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
