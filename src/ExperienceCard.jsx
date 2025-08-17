import React from "react";

function ExperienceCard(props) {
    return (
        <div style={{ 
            margin: "20px auto",
            fontFamily: "PT Sans, sans-serif"
        }}>
            <br />
            <h1 style={{ 
                fontSize: "32px", 
                fontWeight: "bold", 
                color: "#2F2A2A", 
                margin: "0 0 8px 0" 
            }}>{props.Title}</h1>
            
            <h2 style={{ 
                fontSize: "18px", 
                fontWeight: "normal", 
                color: "#2F2A2A", 
                margin: "0 0 8px 0" 
            }}>{props.Title2}</h2>
            
            <p style={{ 
                fontSize: "16px", 
                fontWeight: "normal", 
                color: "#2F2A2A", 
                margin: "0 0 30px 0" 
            }}>{props.Year}</p>
            
            <p style={{ 
                fontSize: "16px", 
                lineHeight: "1.5", 
                color: "#2F2A2A", 
                margin: "0 0 40px 0",
                textAlign: "justify"
            }}>
               {props.description}
            </p>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ color: "#2F2A2A", fontSize: "16px" }}>Position</span>
                <span style={{ color: "#2F2A2A", fontSize: "16px" }}>{props.position}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ color: "#2F2A2A", fontSize: "16px" }}>Location</span>
                <span style={{ color: "#2F2A2A", fontSize: "16px" }}>{props.location}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ color: "#2F2A2A", fontSize: "16px" }}>Industry</span>
                <span style={{ color: "#2F2A2A", fontSize: "16px" }}>{props.industry}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#2F2A2A", fontSize: "16px" }}>Website</span>
                <a href={props.website} style={{ color: "#000", fontSize: "16px", textDecoration: "underline"  }}>
                  {props.website}
                </a>
            </div>
        </div>
    );
}

export default ExperienceCard;