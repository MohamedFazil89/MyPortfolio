import { useState, useEffect } from "react";
import "../styles/Intro.css";

const Intro = ({ onAnimationEnd }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
      if (onAnimationEnd) onAnimationEnd();
    }, 9000); // Adjust timing as per animation
  }, [onAnimationEnd]);

  return (
    <div className={`intro-container ${animationComplete ? "hide" : ""}`}>
      <div className="glowing-circle">
        <span className="glowing-letter">F</span>
      </div>
    </div>
  );
};

export default Intro;
