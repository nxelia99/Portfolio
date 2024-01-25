import React, {useState} from "react";

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <section className="qualification section" id="qualification">
            <h1 className="section_title">Qualification</h1>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button-flex" : "qualification_button button--flex" }  onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"> </i>
                        Education
                    </div>
                        <div className={toggleState === 2 ? "qualification_button qualification_active button-flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                            <i className="uil uil-briefcase-alt qualification_icon"> </i>
                            Experience
                        </div>
                </div>
                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active": "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Google IT Support Professional Certificate</h3>
                                <span className="qualification_subtitle">Coursera</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>January - May 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Google IT Automation with Python Professional Certificate</h3>
                                <span className="qualification_subtitle">Coursera</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>April - June 2022
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Google Data Analytics Professional Certificate</h3>
                                <span className="qualification_subtitle">Coursera</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>April - June 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Cross-Platform apps development FP Degree</h3>
                                <span className="qualification_subtitle">Spain- Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active": "qualification_content"}>
                           <div className="qualification_data">
                               <div>
                                    <h3 className="qualification_title">App for a project about children with Dysgraphia</h3>
                                    <span className="qualification_subtitle">Lingüística-Universidad de Sevilla</span>
                                    <div className="qualification_calendar">
                                       <i className="uil uil-calendar-alt"></i>2020
                                    </div>
                               </div>
                                <div>
                                     <span className="qualification_rounder"></span>
                                     <span className="qualification_line"></span>
                                </div>
                           </div>
                    </div>
                </div>
            </div>
        </section>
    )
}