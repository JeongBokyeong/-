import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import style from './Home.module.css' 


function Home() {
  return (
    <section>
      <Container fluid className={style.homeSection} id={style.home}>
        <Particle />
        <Container className={style.homeContent}>

              <h1 className={style.headingName}>
                안녕!!! 난 수달이야
                아닌가?
                난 뭐지
                <br/>
                <strong >피곤하다 자고 싶은데...</strong>
                <h5>숙제하기 싫다....ㅠㅠㅠㅠㅠㅠ</h5>
                <h5> bbbbbbbbbb</h5>
                <h5> bbbbbbbbbb</h5>
                <h5> bbbbbbbbbb</h5>
                <h5> bbbbbbbbbb</h5>
                <h5> bbbbbbbbbb</h5>
                <h5> 뭐라뭐라</h5>
                <h5> 오 잘내려가네 다행</h5>

              </h1>
              
        </Container>
      </Container>  
    </section>
  );
}

export default Home;
