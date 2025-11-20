import React from "react";
import Avatar from "./Avatar";


const customstyles = {
  textAlign: "left",
  fontFamily: "PT Sans, sans-serif",
  fontWeight: "200",
  color: "#2F2A2A",

};

const customstyles1 = {
   fontSize: "clamp(28px, 6vw, 40px)",
  fontFamily: "Nunito, sans-serif",
  fontWeight: "400",
  color: "#2F2A2A",
};

function Intropage() {
  return (
     <div style={{...customstyles1, padding: "0 1rem"}}>
        <h1 className='firstanimate'>Ayomide</h1>
        <h1 className='secondanimate'>Sayo-adeyemi</h1>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar img="./Ayo.jpeg" />
        </div>
        <br />
        <br />
        <p style={{...customstyles, fontSize: "clamp(14px, 4vw, 18px)", textAlign: "center", padding: "0 1rem"}}>Software Engineering Student/Graphic Designer | Building Seamless, User-Focused Web Experiences</p>
     </div>
  );
}

export default Intropage;
