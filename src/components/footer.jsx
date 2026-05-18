import React from 'react';
import Logo from '../assets/images/White_logo.png';
import KLogo from '../assets/images/KustardLogo3.png';

const Footer = () => {
    return (
        <footer className="main-footer " id="contact">
            <div className="main-footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-5 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
                            <div className="footer-widget footer-widget--about">
                                <div className="footer-content">
                                    <div className="footer-col">
                                        <img src={Logo} alt="PropTurtle" className="footer-logo" />
                                        <p style={{ marginTop: '30px' }}>
                                            Your gateway to fractional real estate investments where you earn
                                            rentals and capital appreciation.
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="footer-widget__social">
                                    <a href="https://www.facebook.com/share/1Bhg1LtCjC/" target="_blank" rel="noreferrer">
                                    
                                        <i class="fa-brands fa-facebook-f"></i>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://www.instagram.com/propturtle?igsh=MWRpMmcxbjZmbnh1Nw==" target="_blank" rel="noreferrer">
                                       
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                    <a href="https://www.linkedin.com/company/propturtle/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                </div> */}
                                <div className="footer-widget__social">
                                    <a href="https://www.facebook.com/share/1Bhg1LtCjC/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                        <span className="sr-only">Facebook</span>
                                    </a>

                                    <a href="https://www.instagram.com/propturtle?igsh=MWRpMmcxbjZmbnh1Nw==" target="_blank" rel="noreferrer">
                                        <i className="fab fa-instagram"></i>
                                        <span className="sr-only">Instagram</span>
                                    </a>

                                    <a href="https://www.linkedin.com/company/propturtle/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='400ms'>
                            <div className="footer-widget footer-widget--links">
                                <h2 className="footer-widget__title">Links</h2>
                                <ul className="list-unstyled footer-widget__links">
                                    <li><a href="/liveprojects">Live Opportunities</a></li>
                                    <li><a href="/why-choose-us">Why Choose Us</a></li>

                                    <li><a href="/How-it-works">How It Works</a></li>
                                    <li><a href="/whyInvest">Why Invest</a></li>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href='/blogpage'>Blog</a></li>
                                    <li><a href="/Faqs">FAQS</a></li>
                                    {/* <ul className="list-unstyled footer-widget__links"> */}
                                    {/* <li><a href='/privacy'>Privacy Policy</a></li>
                                    <li><a href='/terms'>Terms & Conditions</a></li> */}
                                </ul>
                                    
                                {/* </ul> */}
                                
                            </div>
                            
                        </div>
                        {/* <div >
                        <h2 className="footer-widget__title">Legal</h2>
                                
                                </div> */}
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='700ms'>
                            <div className="footer-widget footer-widget--contact">
                                <h2 className="footer-widget__title">Contact</h2>
                                <ul className="list-unstyled footer-widget__info">
                                    <li>
                                        <div className="footer-widget__info__item" style={{ marginBottom: '40px' }}>
                                            <i className="fas fa-location-dot"></i>
                                        </div>
                                        <a
                                            className="footer-widget__info__text"
                                            href="https://www.google.com/maps/place/propturtle/@17.4413608,78.3757196,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb935bc389c73b:0x60b41c62fbb85899!8m2!3d17.4413608!4d78.3757196!16s%2Fg%2F11yw96vl2s?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            5th Floor Plot No.18/2, Sector-III, Huda Techno Enclave,
                                            Hitec City, Hyderabad,<br /> Telangana-500081
                                        </a>
                                    </li>

                                    <li>
                                        <div className="footer-widget__info__item">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <a className="footer-widget__info__text" href="tel:+919000203636">
                                            +91 9000203636
                                        </a>
                                    </li>

                                    <li>
                                        <div className="footer-widget__info__item">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <a className="footer-widget__info__text" href="mailto:info@propturtle.com">
                                            info@propturtle.com
                                        </a>
                                    </li>
                                    {/* <li><p>RERA number - A02400004774 </p></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer__bottom">
                <div className="container">
                    <div className="main-footer__bottom__inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                       
                     <div className='footer-rera'>
                        <p className='rera'><strong>RERA</strong> Registration Number - A02400004774 </p>
                                                <p className='power-k'>
  Designed by{" "}
  <a 
    href="https://kustard.in/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src={KLogo} 
      className="k-Logo" 
      alt="Kustard"
    />
  </a>
</p>
</div>

                        <p className="main-footer__copyright1" style={{ marginBottom: '20px' }}>
                          <strong>Disclaimer</strong> -  All investments are subject to market risks. Past performance does not guarantee future returns.
                        </p>
 <div className='footer-p'>
                        <p className="main-footer__copyright">
                            &copy; Copyright 2026 Propturtle Consulting LLP. All rights reserved..
                        </p>
                       
                        <a href='/privacy' style={{color:"#ffffff"}}>Privacy Policy</a>
                        <a href='/terms' style={{color:"#ffffff"}}>Terms & Conditions</a>
                        </div>
                        {/* <p className='power-k'>Designed by <img src={KLogo} className='k-Logo' href="https://kustard.in/"/></p> */}
                        
                     {/* <p className='rera'>RERA number - A02400004774 </p> */}


{/* <p className='power-k'>
  Designed by{" "}
  <a 
    href="https://kustard.in/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src={KLogo} 
      className="k-Logo" 
      alt="Kustard"
    />
  </a>
</p> */}

                       
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;