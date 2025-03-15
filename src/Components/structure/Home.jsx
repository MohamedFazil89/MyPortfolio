import SplitText from "./SplitText";
import "../styles/Home.css"
import { useState } from "react";
import GlitchText from "../GlitchText";

export default function Home() {
  const [Greet, setGreet] = useState(true);
  const [renderhome, setRenderHome] = useState(false);
  const handleAnimationComplete = () => {
    setTimeout(() => {
      setGreet(false)

    }, 3000)
  

  };
  return (
    <div className={Greet ? "Greet-container" : "Home-container"}>
      {Greet ? (<SplitText
        text="Hello, Friends!"
        className="text-2xl font-semibold text-center"
        delay={100}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.1}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />) : (

          <section className="Body-container">
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className='custom-class'
          >
            Developer
          </GlitchText>
          <p className="text">I am Mohamed Fazil - Full Stack developer
          Turning your vision into reality with innovative and scalable solutions.</p>


          </section>

      )}
    </div>
  )
}
