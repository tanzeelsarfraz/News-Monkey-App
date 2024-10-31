import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  
  const tabs = {
    home: "active",
    business: "inactive",
    general: "inactive",
    health: "inactive",
    science: "inactive",
    sports: "inactive",
    technology: "inactive",
    entertainment: "inactive",
  };
  const [navbarItems, setNavbarItems] = useState({navItems: tabs})
  const handleCategoryChange = (tabName) => {
    if (tabName === "business")
      setNavbarItems({
        navItems: {
          home: "inactive",
          business: "active",
          general: "inactive",
          health: "inactive",
          science: "inactive",
          sports: "inactive",
          technology: "inactive",
          entertainment: "inactive",
        },
      });
    else if (tabName === "entertainment")
      setNavbarItems({
        navItems: {
          home: "inactive",
          business: "inactive",
          general: "inactive",
          health: "inactive",
          science: "inactive",
          sports: "inactive",
          technology: "inactive",
          entertainment: "active",
        },
      });
    else if (tabName === "health")
      setNavbarItems({
        navItems: {
          home: "inactive",
          business: "inactive",
          general: "inactive",
          health: "active",
          science: "inactive",
          sports: "inactive",
          technology: "inactive",
          entertainment: "inactive",
        },
      });
    else if (tabName === "science")
      setNavbarItems({
        navItems: {
          home: "inactive",
          business: "inactive",
          general: "inactive",
          health: "inactive",
          science: "active",
          sports: "inactive",
          technology: "inactive",
          entertainment: "inactive",
        },
      });
    else if (tabName === "sports")
      setNavbarItems({
        navItems: {
          home: "inactive",
          business: "inactive",
          general: "inactive",
          health: "inactive",
          science: "inactive",
          sports: "active",
          technology: "inactive",
          entertainment: "inactive",
        },
      });
    else if (tabName === "technology")
      setNavbarItems({
        navItems: {
          home: "inactive",
          business: "inactive",
          general: "inactive",
          health: "inactive",
          science: "inactive",
          sports: "inactive",
          technology: "active",
          entertainment: "inactive",
        },
      });
    else
      setNavbarItems({
        navItems: {
          home: "active",
          business: "inactive",
          general: "active",
          health: "inactive",
          science: "inactive",
          sports: "inactive",
          technology: "inactive",
          entertainment: "inactive",
        },
      });
  };
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${navbarItems.navItems.home}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleCategoryChange("business")}
                  className={`nav-link ${navbarItems.navItems.business}`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleCategoryChange("entertainment")}
                  className={`nav-link ${navbarItems.navItems.entertainment}`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleCategoryChange("general")}
                  className={`nav-link ${navbarItems.navItems.general}`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleCategoryChange("health")}
                  className={`nav-link ${navbarItems.navItems.health}`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleCategoryChange("science")}
                  className={`nav-link ${navbarItems.navItems.science}`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleCategoryChange("sports")}
                  className={`nav-link ${navbarItems.navItems.sports}`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleCategoryChange("technology")}
                  className={`nav-link ${navbarItems.navItems.technology}`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onClick={props.handleModeChange}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                  }}
                >
                  Enable {props.mode === "light" ? "Dark" : "Light"} mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }

Navbar.defaultProps = {
  title: "News Monkey",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
