import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/avatar1.png";
import React from "react";
import CV from "../CV/CV.pdf";

export const Banner = () => {
    return (
        <section className="banner mt-0" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1><span>Noelia</span></h1>
                        <h1><span className="purple">Fdez</span></h1>
                        <div class="d-flex flex-row align-items-center mt-3">
                            <p class="text-center text-lg-left mb-0">Full Stack Developer</p>
                            <span class="mx-2">•</span>
                            <p class="purple text-center text-lg-left mb-0">Back End Developer</p>
                            <span class="mx-2">•</span>
                            <p class="text-center text-lg-left mb-0">Aspiring Data Engineer</p>
                        </div>


                        <p className="mt-5">I'm a Full Stack developer focused on Back End, building Websites and Applications that leads to the success of the overall product. 
                            I'm also focusing my professional career on Data Engineering.</p>
                        <div className="buttons">
                            <button className="download"><a download="Noelia-CV-Eng&Esp" href={CV}>Download CV</a></button>
                            <button onClick={()=> console.log('connect')}><a href="#Contact">Let's connect<ArrowRightCircle size={25} /></a></button>
                        </div>
                     </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} width={250} height={250} alt="Header image"/>

                    </Col>
                </Row>
            </Container>

        </section>
    )
}