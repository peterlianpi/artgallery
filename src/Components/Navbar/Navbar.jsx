import "./Navbar.css";
import logo_icon from "../../assets/favicon.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={logo_icon} alt="" />
      <h1>
        <span>ART</span> <br /> GALLERY
      </h1>
    </div>
  );
};
export default Navbar;
