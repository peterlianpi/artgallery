import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./Layout.css";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <main className="layout-container">
      <div className="layout-container-left">
        <Navbar />
        <Footer />
      </div>
      <div className="layout-container-right">{children}</div>
    </main>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
