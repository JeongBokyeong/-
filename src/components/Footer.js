import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

  return (
  <Container fluid className="footer">
    <div className="footer-content">
      <a
      href="https://github.com/"
      style={{ color: "white" }}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <AiFillGithub />
    </a>
    <a
      href="#"
      style={{ color: "white" }}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <AiOutlineTwitter />
    </a>
    <a
      href="#"
      style={{ color: "white" }}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="#"
      style={{ color: "white" }}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <AiFillInstagram />
    </a>
    </div>
  </Container>
  
  );
}

export default Footer;
