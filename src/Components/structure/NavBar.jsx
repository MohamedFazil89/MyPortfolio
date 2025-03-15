import "../styles/Nav.css"
import SplitText from "./SplitText";


export default function NavBar() {
  return (
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links">
      <label htmlFor="nav-check">
      
      <label href="#" htmlFor="nav-check" className="Logo">
        Fazil
      </label>
        
        
      <label href="#" htmlFor="nav-check" className="NavPage">Service</label>
        
        
      <label href="#" htmlFor="nav-check" className="NavPage">Skills</label>
        
        
      <label href="#" htmlFor="nav-check" className="NavPage">Portfolio</label>
        
        
      <label href="#" htmlFor="nav-check" className="NavPage">Contact</label>
      </label>
        
    </div>
  </div>
  )
}
