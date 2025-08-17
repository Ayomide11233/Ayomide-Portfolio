import React, { useState } from "react";

function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    // Simple SVG icons as inline components
    const LinkedinIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    );

    const GithubIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
    );

    const InstagramIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
    );
    return (
        <footer 
            style={{ 
                padding: "60px 40px 30px 40px",
                fontFamily: "PT Sans, sans-serif",
                position: "relative",
                transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                boxShadow: isHovered ? "0 15px 30px rgba(47, 42, 42, 0.3)" : "0 0 0 rgba(47, 42, 42, 0)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          
            {/* Main content */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h2 style={{ 
                    fontSize: "32px", 
                    fontWeight: "normal", 
                    color: "#2F2A2A", 
                    margin: "0 0 30px 0" 
                }}>Let's Connect</h2>
                
                <button style={{
                    
                    background: "linear-gradient(135deg, #4a4a4a, #2F2A2A)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 24px",
                    fontSize: "14px",
                    fontFamily: "PT Sans, sans-serif",
                    cursor: "pointer",
                    letterSpacing: "1px",
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease"
                    
                    
                }}
                onClick={() => window.open("https://calendly.com/ay2006-mide/30min", "_blank")}
                >
                    
                    BOOK A CALL
                </button>
            </div>
            
            {/* Bottom section with social icons and copyright */}
            <div style={{
                borderTop: "1px solid #2F2A2A",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ 
                        cursor: "pointer",
                        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                        transition: "transform 0.3s ease 0.1s"
                    }}
                     onClick={() => window.open("https://www.linkedin.com/in/ayomide-sayo-adeyemi-24474b26a/", "_blank")}
                    >
                        <LinkedinIcon />
                    </div>
                    <div style={{ 
                        cursor: "pointer",
                        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                        transition: "transform 0.3s ease 0.2s"
                    }}
                    onClick={() => window.open("https://github.com/Ayomide11233", "_blank")}
                    >
                        <GithubIcon />
                    </div>
                    <div style={{ 
                        cursor: "pointer",
                        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                        transition: "transform 0.3s ease 0.3s"
                    }}
                    onClick={() => window.open("https://instagram.com/_fadedvisuals", "_blank")}
                    >
                        <InstagramIcon />
                    </div>
                </div>
                
                <p style={{ 
                    fontSize: "12px", 
                    color: "#2F2A2A", 
                    margin: "0" 
                }}>
                    ©2024 copyright
                </p>
            </div>
        </footer>
    );
}

export default Footer;