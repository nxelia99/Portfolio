import {useState, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/avatar1.png";
import React from "react";
import CV from "../CV/CV.pdf";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('')
    const toRotate = ["Full Stack Developer."];
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect (() => {
        let ticker =setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner mt-0" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{"Hi I'm Noelia, a "}<span className="wrap">{text}</span> </h1>
                        <p>I'm a Full Stack developer focused on building Websites and Applications that leads to the success of the overall product.</p>
                        <div className="buttons">
                            <button className="download"><a download="Noelia-CV-Eng&Esp" href={CV}>Download CV (Eng&Esp)</a></button>
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