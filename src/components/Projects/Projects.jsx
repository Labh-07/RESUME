import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MiniProjects from "../../Assets/Projects/MiniProjects.png";
import emotion from "../../Assets/Projects/emotion.png";
import projectMedTrack from "../../Assets/Projects/projectMedTrack.png";
import projectExpandingExpress from "../../Assets/Projects/projectExpandingExpress.png";
import chatify from "../../Assets/Projects/ProjectSCIM.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} // Replace with your SCIM system image
              isBlog={false}
              title="SCIM - Society Community Interaction & Management"
              description="A web-based system to manage service requests, complaints, events, notices, parking slots, and bill payments for housing societies. Built with Spring Boot, this project enables residents and admins to interact and automate community operations."
              ghLink="https://github.com/Labh-07/Info-project.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectMedTrack} // Replace with Med-Track image
              isBlog={false}
              title="Med-Track - Healthcare Appointment System"
              description="Developed a complete medical appointment platform for managing doctor-patient interactions. Features include searching doctors byspecialty, booking appointments, and payment flow. Admins can manage doctors and fees. Built using Spring Boot and MongoDB."
              ghLink="https://github.com/Labh-07/Info-project.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectExpandingExpress}
              isBlog={false}
              title="Expanding Express"
              description="A unique platform that simplifies franchise buying and startup funding by directly connecting businesses with individuals. Features include franchise listings, automated applications, startup investment options, and secure payments. Built with React, Spring Boot, and MongoDB to ensure a seamless and transparent experience."
              ghLink="https://github.com/pradip983/HackTheSpring25.git"
              demoLink="https://exp-express.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MiniProjects} // Replace with a preview of your minor projects or code hub
              isBlog={false}
              title="Frontend Mini Projects Hub"
              description="A collection of small frontend projects focused on enhancing UI/UX and core JavaScript skills. Created using HTML, CSS, JavaScript to practice layout building, DOM manipulation, and interactivity. Covers components like calculators, weather apps, and more."
              ghLink="https://github.com/Labh-07/Project-Hub.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
