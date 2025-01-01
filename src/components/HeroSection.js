import "../assets/css/heroSection.css";
import backgroundImage from "../assets/images/background.jpg"; // Adjust the relative path as needed

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Order your favorite food here</h1>
          <p>Enjoy a variety of tasty dishes made with fresh ingredients.</p>
          <a href="#res-container">
            <button className="view-menu-btn">View Menu</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
