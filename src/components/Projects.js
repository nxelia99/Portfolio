import React, {useState} from 'react';
import image1 from '../assets/img/pokedex.JPG';
import image2 from '../assets/img/projImg2 (2).jpg';
import image3 from '../assets/img/djangoapp.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const Projects = () => {


    return(
        <section className="Projects" id="projects">
            <h1 className="section_title purple fw-bold">My Projects</h1>
                <div className="projects">
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards align-items-center m-auto">
                                    <h4 className='purple'>Pokedex Project</h4>
                                    <img src={image1} alt="Pokedex project icon"/>
                                    <div className="technologies">
                                        <h6 className='purple'>Technologies:</h6>
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
                                <div className="projectcards align-items-center m-auto">
                                        <h4 className='purple'>To Do List App Django</h4>
                                        <img src={image3} className="djangoimg" alt="Django project icon"/>
                                        <div className="technologies">
                                            <h6 className='purple'>Technologies:</h6>
                                            <p>
                                                Python, Django, HTML & CSS
                                            </p>
                                            <div className="icons">
                                                <a href="https://github.com/nxelia99/DjangoToDoListApp" target="_blank"><i className='bx bxl-github'></i></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards align-items-center m-auto">
                                    <h4 className='purple'>Frontend Project</h4>
                                    <img src={image2} alt="Frontrend project"/>
                                    <div className="technologies colin">
                                        <h6 className='purple'>Technologies:</h6>
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
                </div>
        </section>


    )
}
