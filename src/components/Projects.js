import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import image1 from '../assets/img/pokedex.JPG';
import image2 from '../assets/img/projImg2 (2).jpg';
import image3 from '../assets/img/djangoapp.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1280, min: 464 },
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

    return(
        <section className="Projects" id="projects">
            <h1 className="section_title">My Projects</h1>
                <div className="projects">
                    <Carousel responsive={responsive} infinite={true} className="project-slider">
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards card align-items-center m-auto">
                                    <p>Pokedex Project</p>
                                    <img src={image1} alt="Pokedex project icon"/>
                                    <div className="technologies">
                                        <h6>Technologies:</h6>
                                        <p>
                                            Javascript, HTML and CSS
                                        </p>
                                        <div className="icons">
                                            <a href="https://nxelia99.github.io/Pokedex/" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="https://github.com/nxelia99/Pokedex" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards card align-items-center m-auto">
                                        <p>To Do List App Django</p>
                                        <img src={image3} className="djangoimg" alt="Django project icon"/>
                                        <div className="technologies">
                                            <h6>Technologies:</h6>
                                            <p>
                                                Python, Django, HTML & CSS
                                            </p>
                                            <div className="icons">
                                                <a href="https://djangoToDo.nxelia99.repl.co" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                                <a href="https://github.com/nxelia99/DjangoToDoListApp" target="_blank"><i className='bx bxl-github'></i></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards card align-items-center m-auto">
                                    <p>Frontend Project</p>
                                    <img src={image2} alt="Frontrend project"/>
                                    <div className="technologies colin">
                                        <h6>Technologies:</h6>
                                        <p>
                                            HTML and CSS
                                        </p>
                                        <div className="icons">
                                            <a href="https://nxelia99.github.io/collintripsweb/" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="https://github.com/nxelia99/collintripsweb" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Carousel>
                </div>
        </section>


    )
}
