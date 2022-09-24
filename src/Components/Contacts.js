import React from "react";
import '../index.css'
import IconEmail from  '../Images/Icon.png'
import IconLinked from '../Images/Vector.png'

function Contacts () {
    return (
         <div className="contacts">
             <button className="contacts-email"><img className="contacts-email-img" src={IconEmail}></img>Email</button>
             <button className="contacts-linked"><img className="contacts-linked-img" src={IconLinked}></img>LinkedIn</button>
         </div>
    )
}
export default Contacts;