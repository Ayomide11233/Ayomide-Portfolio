import React from "react";
import './Avatar.css'; // Assuming you have some styles for the avatar

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

export default Avatar;
