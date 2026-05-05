import React, { useState, useEffect } from "react";
import "./Header.css";
import { TiChartPie } from "react-icons/ti";
import { VscColorMode } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// MUI



// Icons like original UI
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PaymentsIcon from "@mui/icons-material/Payments";
import BarChartIcon from "@mui/icons-material/BarChart";

const Header = () => {
  const[token, setToken] = React.useState("");
  const[userDetails, setUserDetails] = React.useState({});
  const [theme, setTheme] = useState("light");
  const [dropdown, setDropdown] = useState(false);
  
  const [showModal, setShowModal] = useState(false);
  

  const navigate = useNavigate();
  useEffect(() => {
  const storedToken = sessionStorage.getItem("token");
  const storedUser = sessionStorage.getItem("existingUser");

  setToken(storedToken);

  if (storedUser && storedUser !== "undefined") {
    try {
      setUserDetails(JSON.parse(storedUser));
    } catch (err) {
      console.error("Invalid JSON:", err);
      setUserDetails(null);
    }
  } else {
    setUserDetails(null);
  }

}, []); // ✅ run only once

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="header-container">

      {/* TOP BANNER */}
      <div className="top-banner">
        Happy teams. Easy HR. That's HireNexus. Try it for free!
        <button className="signup-btn">Sign up</button>
      </div>

      {/* NAVBAR */}
      <div className="navbar">

        {/* LOGO */}
        <div className="logo-container">
          <TiChartPie className="logo-icon" />
          <h1 className="logo-text">HireNexus</h1>
        </div>

        {/* MENU */}
        <ul className="menu">

          <li onClick={() => setDropdown(!dropdown)}>
            Platform <span className="new-badge">NEW</span>
            <IoIosArrowDown className={dropdown ? "rotate" : ""} />

            {dropdown && (
              <div className="mega-dropdown">

                <div className="grid">

                  <div className="item">
                    <PersonAddAltIcon className="icon"/>
                    <div>
                      <h4>Hire</h4>
                      <p>Put recruiting on cruise control with our cloud-based ATS</p>
                    </div>
                  </div>

                  <div className="item">
                    <AssignmentIcon className="icon"/>
                    <div>
                      <h4>Manage</h4>
                      <p>Keep your employee records intact</p>
                    </div>
                  </div>

                  <div className="item">
                    <TrackChangesIcon className="icon"/>
                    <div>
                      <h4>Perform</h4>
                      <p>Take the pain out of performance management</p>
                    </div>
                  </div>

                  <div className="item">
                    <EmojiObjectsIcon className="icon"/>
                    <div>
                      <h4>Engage</h4>
                      <p>Boost productivity with engaging tools</p>
                    </div>
                  </div>

                  <div className="item">
                    <PaymentsIcon className="icon"/>
                    <div>
                      <h4>Payroll</h4>
                      <p>Manage employee data & payslips</p>
                    </div>
                  </div>

                  <div className="item">
                    <BarChartIcon className="icon"/>
                    <div>
                      <h4>AI & Analytics</h4>
                      <p>Make decisions based on accurate data</p>
                    </div>
                  </div>

                </div>

              </div>
            )}
          </li>

          <li>Resources <IoIosArrowDown /></li>
          <li>Partners <IoIosArrowDown /></li>
          <li>About Us <IoIosArrowDown /></li>
          <li>Pricing</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="right-section">

          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>

          <button className="demo-btn" onClick={() => setShowModal(true)}>
            Schedule a demo
          </button>

        
          <button className="theme-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <VscColorMode />
          </button>

        </div>
      </div>

      {/* ✅ PERFECT MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <span className="close-btn" onClick={() => setShowModal(false)}>✕</span>

            <h2>Schedule a Demo !</h2>
            <p>Get a personalized demo with our experts to get you started</p>

            <input placeholder="Name *" />
            <input placeholder="Work Email *" />
            <input placeholder="Company Name *" />

            <div className="row">
              <input placeholder="Country" />
              <input placeholder="Contact Number" />
            </div>

            <label className="checkbox">
              <input type="checkbox" defaultChecked />
              By submitting this information, I am signing up to receive communications
            </label>

            <button className="submit-btn">Submit</button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Header;