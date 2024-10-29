import { Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const ProjectCard = ({ title, description, imgUrl, link, codelink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/><br></br>
          <a href={link} style={{textDecoration:"Underline",marginTop:"30px",color:"white"}} target="_blank" rel="noopener noreferrer">Visit Site<FontAwesomeIcon icon={faExternalLinkAlt} />
          </a><br></br>
          <a href={codelink} style={{textDecoration:"Underline",marginTop:"30px",color:"white"}} target="_blank" rel="noopener noreferrer">View Code<FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </Col>
  )
}
