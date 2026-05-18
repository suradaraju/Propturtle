import { useState } from "react";
import Logo1 from "../assets/images/Logo1.png";
import logo2 from '../assets/images/White_logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="main-header main-header--two sticky-header sticky-header--normal">
        <div className="container">
          <div className="main-header__inner">
            {/* Logo */}
            <div className="main-header__logo">
              <a href="/">
                <img src={Logo1} alt="Logo" style={{ width: "100px", height: "70px" }} />
              </a>
            </div>

            {/* Navigation */}
            <div className={`main-header__middle ${isMenuOpen ? "mobile-menu-active" : ""}`}>
              {/* Mobile Header */}
              <div className="mobile-nav__header mobile-only">
                <img src={logo2} alt="Logo" style={{ width: "80px" }} />
                <button className="mobile-nav__close" onClick={closeMenu}>
                  &times;
                </button>
              </div>

              {/* Menu */}
              <nav className="main-header__nav main-menu">
                <ul className="main-menu__list one-page-scroll-menu">
                  <li><a href="/" onClick={closeMenu}>Home</a></li>
                  <li><a href="/about-us" onClick={closeMenu}>About Us</a></li>
                  <li><a href="/why-choose-us" onClick={closeMenu}>Why Choose Us</a></li>
                  <li><a href="/liveprojects" onClick={closeMenu}>Live Opportunities</a></li>
                  {/* <li><a href="/liveopportunities" onClick={closeMenu}>Live Opportunities</a></li> */}
                  <li><a href="/How-it-Works" onClick={closeMenu}>How It Works</a></li>
                  {/* <li><a href="/aboutus" onClick={closeMenu}>About Us</a></li>
                  <li><a href="/whychoose" onClick={closeMenu}>Why Choose Us</a></li>
                  <li><a href="/liveprojects" onClick={closeMenu}>Live Opportunities</a></li>
                  <li><a href="/HowIt" onClick={closeMenu}>How It Works</a></li> */}
                  {/* <li><a href="/blogpage" onClick={closeMenu}>Blog</a></li> */}
                  {/* <li><a href="/Faqs" onClick={closeMenu}>FAQ'S</a></li> */}
                  <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
                </ul>
              </nav>
            </div>

            {/* Hamburger */}
            <div className="main-header__right">
              <div className="mobile-nav__btn mobile-nav__toggler" onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Overlay */}
      {/* {isMenuOpen && <div className="mobile-nav__overlay" onClick={closeMenu}></div>} */}
    </>
  );
}
