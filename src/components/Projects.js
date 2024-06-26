import React from 'react';
import image1 from '../assets/img/NetflixClone.JPG';
import image2 from '../assets/img/FastAPIWorkout.JPG';
import image3 from '../assets/img/projImg2 (2).jpg';
import image4 from '../assets/img/Hibernate.jpg';
import image5 from '../assets/img/DoctorAppointment.JPG';
import "react-multi-carousel/lib/styles.css";



export const Projects = () => {


    return(
        <section className="Projects" id="projects">
            <h1 className="section_title purple fw-bold">My Projects</h1>
                <div className="projects">
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards align-items-center m-auto">
                                    <h4 className='purple'>Netflix Clone</h4>
                                    <img src={image1} alt="Netflix Clone project image"/>
                                    <div className="technologies">
                                        <h6 className='purple'>Technologies:</h6>
                                        <p>
                                            React, JS, Firebase, Redux
                                        </p>
                                        <div className="icons">
                                            <a href="https://react-netflix-clone-ad653.firebaseapp.com/" target="_blank"> <i className='bx bx-link-external' ></i></a>
                                            <a href="https://github.com/nxelia99/NetflixCloneReact.git" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center">
                                <div className="projectcards align-items-center m-auto">
                                        <h4 className='purple'>Workout Tracker</h4>
                                        <img src={image2} className="djangoimg" alt="FastAPI project icon"/>
                                        <div className="technologies">
                                            <h6 className='purple'>Technologies:</h6>
                                            <p>
                                                Python, FastAPI, MongoDB, Bootstrap
                                            </p>
                                            <div className="icons">
                                                <a href="https://github.com/nxelia99/WorkoutTracker" target="_blank"><i className='bx bxl-github'></i></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards align-items-center m-auto">
                                    <h4 className='purple'>Frontend Project</h4>
                                    <img src={image3} alt="Frontrend project"/>
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
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards align-items-center m-auto">
                                    <h4 className='purple'>Students management system</h4>
                                    <img src={image4} alt="Students management system"/>
                                    <div className="technologies colin">
                                        <h6 className='purple'>Technologies:</h6>
                                        <p>
                                            Java, Hibernate, MySQL
                                            <br></br>Pure Backend, no UI.
                                        </p>
                                        <div className="icons">
                                            <a href="https://github.com/nxelia99/collintripsweb" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item align-items-center mt-2 m-auto justify-content-center align-items-center m-auto">
                                <div className="projectcards align-items-center m-auto">
                                    <h4 className='purple'>Doctor Appointment Booking</h4>
                                    <img src={image5} alt="Doctor Appointment Booking"/>
                                    <div className="technologies colin">
                                        <h6 className='purple'>Technologies:</h6>
                                        <p>
                                            React, JS, MongoDB, Node.js, Tailwind
                                        </p>
                                        <div className="icons">
                                            <a href="https://github.com/nxelia99/collintripsweb" target="_blank"><i className='bx bxl-github'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
        </section>


    )
}
