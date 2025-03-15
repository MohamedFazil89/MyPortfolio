import { useState } from "react";
import "./App.css";
import Intro from "./Components/structure/Intro";
import HomePage from "./Components/structure/Home"
import NavBar from "./Components/structure/NavBar";
import Service from "./Components/structure/Service"


function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {!showHome && <Intro onAnimationEnd={() => setShowHome(true)} />}

      {showHome && (
        <div className="home-screen">
  
  
          <NavBar />
          <HomePage />
          <Service />

          
          
          {/* Add the rest of your homepage components */}
        </div>
      )}
    </>
  );
}

export default App;
