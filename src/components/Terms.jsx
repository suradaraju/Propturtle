import bg from '../assets/images/backgrounds/header-bg.jpg';
import Navbar from './Navbar';
import Footer from './footer';

export default function Terms(){
    return(
        <>
        <div className='Terms-container'>
            <Navbar />
            <div className='terms-header' style={{backgroundImage:`url(${bg})`}}>
                <h1>TERMS &amp; CONDITIONS</h1>
            </div>
            <div className='terms-content'>
                <h2>TERMS &amp; CONDITIONS</h2>
                <p>Propturtle Consulting LLP</p>
                {/* <p>Effective Date: [Insert Date]</p> */}
            

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing this website and submitting your information, you agree to these Terms &amp;
            Conditions.</p>
            <p>If you do not agree, you must discontinue use immediately.</p>

            <h2>2. Nature of Website</h2>
            <p>This website provides information regarding fractional real estate and development-stage
                investment opportunities.</p>
                <p>This website:</p>
                <ul>
                    <li>Does not constitute a binding investment offer</li>
                    <li>Does not guarantee returns</li>
                    <li>Does not provide financial, legal, or tax advice</li>
                    <li>Users are advised to conduct independent due diligence before making investment decisions.</li>
                </ul>

                <h2>3. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul>
                    <li>Provide accurate and truthful information</li>
                    <li>Not misuse the website</li>
                    <li>Not attempt unauthorized access or data extraction</li>
                </ul>
                <p>We reserve the right to restrict access for violations.</p>


                <h2>4. Intellectual Property</h2>
                <p>All content including branding, logos, text, graphics, and materials on this website are the
                    property of Propturtle Consulting LLP.</p>
                <p>Unauthorized reproduction or distribution is prohibited.</p>

                <h2>5. Investment Risk Disclaimer</h2>
                <p>Real estate investments are subject to risks including:</p>
                <ul>
                    <li>Market fluctuations</li>
                    <li>Regulatory changes</li>
                    <li>Economic conditions</li>
                    <li>Project execution risks</li>
                </ul>
                <p>Any projections or return estimates are illustrative only and do not constitute guarantees.</p>

                <h2>6. Limitation of Liability</h2>
                <p>Propturtle Consulting LLP shall not be liable for:</p>
                <ul>
                    <li>Decisions made based on website information</li>
                    <li>Indirect or consequential losses</li>
                    <li>Technical disruptions or website downtime</li>
                </ul>
                <p>Use of this website is at your own risk.</p>

                <h2>7. Governing Law &amp; Jurisdiction</h2>
                <p>These Terms are governed by the laws of India.<br />
Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.</p>

                <h2>8. Amendments</h2>
                <p>We reserve the right to modify these Terms at any time. Continued use of the website
constitutes acceptance of revised Terms.</p>
</div>
        </div>
        <Footer />
        </>
    )
}




