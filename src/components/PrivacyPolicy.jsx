import bg from '../assets/images/backgrounds/header-bg.jpg';
import Navbar from './Navbar';
import Footer from './footer';

export default function Privacy(){
    return(
        <>
        <div className='privacy-container'>
            <Navbar />
            <div className='privacy-header' style={{backgroundImage:`url(${bg})`}}>
                <h1>Privacy Policy</h1>
            </div>
            <div className='privacy-content'>

                <h2>Propturtle Consulting LLP</h2>
                {/* <p>Effective Date: [Insert Date]</p>  */}
                {/* <p>Last Updated: [Insert Date]</p> */}


                <h2>1. Introduction</h2>
                <p>Propturtle Consulting LLP (“Company”, “we”, “our”, “us”) is committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use, and safeguard your personal
                    information when you visit our website or submit your details through our platform.</p>
                <p>By accessing our website, you agree to this Privacy Policy.</p>
                <p>This policy is governed by applicable Indian laws, including the Information Technology
                    Act, 2000 and the Digital Personal Data Protection Act, 2023.</p>


                <h2>2.Information We Collect</h2>
                <p>We currently collect only the following information:</p>
                <ul>
                    <li>Name (if voluntarily provided)</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                </ul>
                <p>We do not collect:</p>
                <ul>
                    <li>PAN</li>
                    <li>Aadhar</li>
                    <li>Bank account details</li>
                    <li>Financial documents</li>
                </ul>


                <h2>3.Purpose of Data Collection</h2>
                <p>We use your information to:</p>
                <ul>
                    <li>Respond to your investment inquiries</li>
                    <li>Share project-related details</li>
                    <li>Provide consultation regarding real estate opportunities</li>
                    <li>Send relevant updates (if opted in)</li>
                    <li>Improve our services and communication</li>
                </ul>
                <p>We do not sell, rent, or trade your personal information.</p>


                <h2>4. Legal Basis for Processing</h2>
                <p>We process your data based on:</p>
                <ul>
                    <li>Your consent when submitting information</li>
                    <li>Legitimate business interests in responding to inquiries</li>
                </ul>
                <p>You may withdraw your consent at any time by writing to info@propturtle.com.</p>
            
            
                <h2>5. Data Sharing</h2>
                <p>We do not share your personal information except:</p>
                <ul>
                    <li>With website hosting or CRM service providers</li>
                    <li>When required by law or regulatory authority</li>
                </ul>
                <p>All third-party providers are obligated to maintain confidentiality.</p>
            

                <h2>6. Data Retention</h2>
                <p>We retain your contact information:</p>
                <ul>
                    <li>As long as necessary to respond to inquiries</li>
                    <li>For legitimate business communication</li>
                    <li>Until deletion is requested</li>
                </ul>
                <p>To request deletion, email info@propturtle.com.</p>


                <h2>7. Cookies</h2>
                <p>Our website may use cookies for:</p>
                <ul>
                    <li>Website functionality</li>
                    <li>Analytics and performance tracking</li>
                    <li>Improving user experience</li>
                </ul>
                <p>You may disable cookies through your browser settings.</p>

                <h2>8. Data Security</h2>
                <p>We implement reasonable security measures including:</p>
                <ul>
                    <li>SSL encryption</li>
                    <li>Secure hosting infrastructure</li>
                    <li>Restricted internal access</li>
                </ul>
                <p>However, no online transmission can be guaranteed 100% secure.</p>

                <h2>9. Your Rights</h2>
                <p>Under applicable law, you have the right to:</p>
                <ul>
                    <li>Access your data</li>
                    <li>Correct inaccuracies</li>
                    <li>Withdraw consent</li>
                    <li>Request deletion</li>
                </ul>
                <p>For any request, contact info@propturtle.com.</p>


                <h2>10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy periodically. Any changes will be reflected on this page
                    with an updated revision date.</p>

                <h2>11. Contact Details</h2>
                <ul className='privacy-list'>
                    <li>Propturtle Consulting LLP</li>
                    <li>Hyderabad, Telangana, India</li>
                    <li><a href="mailto:info@propturtle.com" className="privacy-email">
                                            Email:info@propturtle.com
                                        </a></li>
                    <li>Phone: +91 9000203636</li>
                </ul>
            </div>
        </div>
        <Footer />
        </>
    )
}