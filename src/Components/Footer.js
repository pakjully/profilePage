import React from "react";
import '../index.css'
import IconTwit from '../Images/Twitter Icon.png'
import IconFace from '../Images/Facebook Icon.png'
import IconInst from '../Images/Instagram Icon.png'
import IconGit from '../Images/GitHub Icon.png'

function Footer () {
    return (
        <footer>
            <a><img className="footer-img-twit" src={IconTwit} /></a>
            <a><img src={IconFace} /></a>
            <a><img src={IconInst} /></a>
            <a><img className="footer-img-git" src={IconGit} /></a>
        </footer>
    )
}

export default Footer;