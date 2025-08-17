import React from "react";
import Avatar from "./Avatar";


const customstyles = {
  textAlign: "left",
  fontFamily: "PT Sans, sans-serif",
  fontWeight: "200",
  color: "#2F2A2A",

};

const customstyles1 = {
   fontSize: "40px",
  fontFamily: "Nunito, sans-serif",
  fontWeight: "400",
  color: "#2F2A2A",
};

function Intropage() {
  return (
     <div style={customstyles1}>
        <h1 className='firstanimate'>Ayomide</h1>
        <h1 className='secondanimate'>Sayo-adeyemi</h1>
        <br />
        <br />
        <Avatar img="/Ayo.jpeg" />        
        <br />
        <br />
        <p style={customstyles}>Software Engineering Student/Graphic Designer | Building Seamless, User-Focused Web Experiences</p>
     </div>
  );
}

export default Intropage;
