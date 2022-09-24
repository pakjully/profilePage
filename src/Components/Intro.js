import React from "react";
import Img from '../Images/Rectangle 90.png'
import '../index.css'

function Intro () {
    return (
        <div>
            <img src={Img} />
            <h1>Laura Smith</h1>
            <p className="intro-title">Frontend Developer</p>
            <p className="intro-address">laurasmith.website</p>
        </div>
    )
}

export default Intro;