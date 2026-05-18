import React, { useState } from "react";
import "../assets/css/solinom.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import { API_URL } from "../config/api";
import { Helmet } from "react-helmet-async";
/* IMAGE IMPORTS */
import headerBg from "../assets/images/backgrounds/Website_Contact Us.jpg";

function Contact() {
  const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       phone: e.target.phone.value,
//       message: e.target.message.value,
//       // budget: e.target.budget.value,
//     };

//     setLoading(true);

//     try {
//     const res = await fetch(`${API_URL}/contact`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// });
// console.log('result',res)

//       if (res.ok) {
//         alert("Message sent successfully!");
//         e.target.reset();
//       } else {
//         alert(data.message || "Failed to send message");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };const handleSubmit = async (e) => {
  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  setLoading(true);

  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message || "Message sent successfully!");
      e.target.reset();
    } else {
      alert(data.message || "Failed to send message");
    }
  } catch (error) {
    console.error("Contact error:", error);
    alert("Server error. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
            <Helmet>
      <title>Contact PropTurtle | Fractional Real Estate Hyderabad</title>
      <meta
          name="description"
          content="Get in touch with PropTurtle to explore fractional real estate investment opportunities in Hyderabad. Speak with our team today."
        />
    </Helmet>
      <div className="page-wrapper">
        <Navbar />

        {/* PAGE HEADER */}
        <section className="page-header">
          <div
            className="page-header__bg"
            style={{ backgroundImage: `url(${headerBg})` }}
          ></div>

          <div className="container">
            <h2 className="page-header__title">Contact</h2>
            <p style={{ color: "#fff", fontSize: "20px" }}>
             Have questions? Connect with us to explore investment opportunities.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-one">
          <div className="container">
            <div className="contact-one__inner">
              <div className="row gutter-y-30">

                {/* LEFT FORM */}
                <div className="col-lg-7">
                  <form className="contact-one__form form-one" onSubmit={handleSubmit}>
                    <div className="contact-one__form__top">
                      <div className="sec-title text-start">
                        <h6 className="sec-title__tagline">Contact with us</h6>
                        <h3 className="sec-title__title">Let’s Talk Investments</h3>
                      </div>
                    </div>

                    <div className="form-one__group">

                      <div className="form-one__control">
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>

                      <div className="form-one__control">
                        <input type="email" name="email" placeholder="Email Address" required />
                      </div>

                      <div className="form-one__control">
                        <input type="text" name="phone" placeholder="Phone" required />
                      </div>

                      <div className="form-one__control">
                        <textarea name="message" placeholder="Write a Message" required></textarea>
                      </div>

                      {/* <div className="form-one__control">
                        <select name="budget" className="form-one__input" required>
                          <option value="">Select Budget Range</option>
                          <option>Below ₹10,000</option>
                          <option>₹10,000 – ₹25,000</option>
                          <option>₹25,000 – ₹50,000</option>
                          <option>₹50,000 – ₹1,00,000</option>
                          <option>Above ₹1,00,000</option>
                        </select>
                      </div> */}

                      <div className="form-one__control">
                        <button type="submit" className="solinom-btn solinom-btn--base" disabled={loading}>
                          {loading ? "Sending..." : "Send a Message"}
                        </button>
                      </div>

                    </div>
                  </form>
                </div>

                {/* RIGHT INFO */}
                <div className="col-lg-5">
                  <div className="contact-one__right">
                    <div className="contact-one__content">
                      <h4 className="contact-one__content__title">Contact Information</h4>

                      <ul className="list-unstyled">
                        <li>
                          <div className="contact-one__content__icon">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <div className="contact-one__content__inner">
                            <span className="contact-one__content__subtitle">Have any question?</span>
                            <a href="tel:+91-9000203636" className="contact-one__content__link">
                              +91-9000203636
                            </a>
                          </div>
                        </li>

                        <li>
                          <div className="contact-one__content__icon">
                            <i className="fa-solid fa-envelope"></i>
                          </div>
                          <div className="contact-one__content__inner">
                            <span className="contact-one__content__subtitle">Send Email</span>
                            <a href="mailto:support@propturtle.com" className="contact-one__content__link">
                              support@propturtle.com
                            </a>
                          </div>
                        </li>

                        <li>
                          <div className="contact-one__content__icon">
                            <i className="fa-solid fa-location-dot"></i>
                          </div>
                          <div className="contact-one__content__inner">
                            <span className="contact-one__content__subtitle">Visit Anytime</span>
                            <span className="contact-one__content__link">
                              Hitec City, Hyderabad, Telangana
                            </span>
                          </div>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <div className="contact-map">
          <div className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3832619071213!2d78.3757196!3d17.441360799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935bc389c73b%3A0x60b41c62fbb85899!2sPropturtle!5e0!3m2!1sen!2sin!4v1769095003568!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;
