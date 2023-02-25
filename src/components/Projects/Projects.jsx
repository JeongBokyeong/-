import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
import style from "./projects.module.css";
import img from "../../Assets/Projects/chatify.png";


function Projects() {
  // list of projects 
  const projects =[
    {
      id: 1,
      title: "project 1",
      img : "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png.webp",
      ghlink :"#",
      liveSite:"#"
    },
    {
      id: 2,
      title: "project 2",
      img : "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png.webp",
      ghlink :"#",
      liveSite:"#"
    },
    {
      id: 3,
      title: "project 3",
      img : "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png.webp",
      ghlink :"#",
      liveSite:"#"
    },
    {
      id: 4,
      title: "project 4",
      img : "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png.webp",
      ghlink :"#",
      liveSite:"#"
    },
    {
      id: 5,
      title: "project 5",
      img : "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png.webp",
      ghlink :"#",
      liveSite:"#"
    },
    {
      id: 6,
      title: "project 6",
      img : "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png.webp",
      ghlink :"#",
      liveSite:"#"
    }
  ]
  return (
    <Container fluid className={style.projectSection}>
      <Particle />
      <Container>
        <h1 className={style.projectHeading}>
          최근에 <strong className="purple">만든거? </strong>
        </h1>
        <p style={{ color: "white" }}>
          내가 한 프로젝트 같은거?
        </p>
        {/* disply project list */}
        <Row style={{justifyContent:"center", paddingBottom:"10px"}}>
          {projects.map((project)=>{
            return(
              <Col md={4} className={style.projectCard}>
                <ProjectCard 
                  title={project.title}
                  img={project.img}
                  ghlink={project.ghlink}
                  liveSite={project.liveStie}
                  />
              </Col>
            )
          }
          )}
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
