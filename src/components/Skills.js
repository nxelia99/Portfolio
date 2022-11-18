import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

export  const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        medium:{
            breakpoint:{max: 780, min: 400},
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                       <div className="skill-bx">
                           <h2>
                               Get to know me!
                           </h2>
                           <p>My name is Noelia and I have a passion for technology, from software engineering to client-side applications.
                               Started as a autodidact and now I am currently studying Multplatform Software development.
                               In addition to my love for technology and design, I am also interested in literature, education, history, economics and politics.
                               In the projects section are some of the projects I have developed so far.</p>
                           <Carousel responsive={responsive} infinite={true} className="skill-slider">
                               <div className="item">
                                   <i className="uil uil-arrow-up"></i>
                                   <h5>Self-motivated</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-ear"></i>
                                   <h5>Active listening</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-balance-scale"></i>
                                   <h5>Strong work ethic</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-presentation-edit"></i>
                                   <h5>Dedication</h5>
                               </div>
                           </Carousel>
                       </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
