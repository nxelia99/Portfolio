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
                           <h2 className="purple fw-bold">
                               Get to know me!
                           </h2>
                           <p>I'm Noelia and I have a passion for technology, from Full Stack Developement, to Back End and Data Science & Analytics.
                               Started as a autodidact and now I'm a graduated Multiplatform Software developer.
                               I'm also learning about Data Science and Data Analytics.
                               In the projects section are some of the projects I have developed so far.</p>
                           <Carousel responsive={responsive} infinite={true} className="skill-slider">
                               <div className="item">
                                   <i className="uil uil-arrow-up purple"></i>
                                   <h5>Self-motivated</h5>
                               </div>
                               <div className="item">
                               <i class='bx bxs-group purple mt-3'></i>
                                   <h5>Team worker</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-ear purple"></i>
                                   <h5>Active listening</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-balance-scale purple"></i>
                                   <h5>Strong work ethic</h5>
                               </div>
                               <div className="item">
                                   <i className="uil uil-presentation-edit purple"></i>
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
