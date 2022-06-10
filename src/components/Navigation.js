import React from "react"
import Logo from "../images/logo.svg"
import NavbarLink from "./NavbarLink";

const Navigation = () => {
  return (
    // <!-- Navigation Bar -->
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <a href="index.html"><img src={Logo} alt="logo"/></a>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                <NavbarLink url="index.html" text="Home" />
                <NavbarLink url="portfolio.html" text="Portfolio" />
                <NavbarLink url="contact.html" text="Contact" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;