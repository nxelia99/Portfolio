import React from "react";
import {Frontend} from "./Frontend";
import {Backend} from "./Backend";



export const Languages = () => {
    return(
        <section className="languages section  mt-5 mb-5" id="technicallevels">
            <h2 className="section_title">My technical levels</h2>
            <div className="languages_container container">
                <Frontend />
                <Backend />
            </div>
        </section>
    );
};





