import { FaTty, FaCat, FaLaptopCode, FaGamepad, FaBook, FaTractor } from "react-icons/fa";


const Why = () => {
  return (
    <div className="why">
      <h2>Why Chose Us?</h2>
      <div className="why__why-container">
        <img src="https://rawredemptionphotography.com/adventure(16).jpg" alt="photographer" />
        <div className="why-container-right">
          <h3>Services</h3>
          <ul>
            <li>Design reinvent cultivate rss-capable front-end models convergence</li>
            <li>Envisioneer innovative, cross-media applications mission-critical networkeffects</li>
            <li>Facilitate A-list: peer-to-peer webservices platforms aggregate B2B deploy facilitate</li>
          </ul>
          <div className="why-driver">
            <h3>65000</h3>
            <p>over that many photos make you bread</p>
          </div>
          <div className="why-mega-icon-rep">
            <h3>Who uses us?</h3>
            <div className="icon-container">
            <a href="#"><FaCat className="icons" /></a>
            <a href="#"><FaCat className="icons" /></a>
            <a href="#"><FaCat className="icons" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
