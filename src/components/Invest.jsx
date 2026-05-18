import React from 'react';
import '../assets/css/invest.css';

const InvestUs = () => {
    const values = [
        {

            title: "Value We Create",
            text: "We enhance asset value through strategic management, upgrades, and optimized leasing.",
            icon: "/assets/images/shapes/why-choose-1-1.png"
        },
        {
            title: "Dual Returns",
            text: "Earn stable rental income during ownership with capital appreciation at exit.",
            icon: "/assets/images/shapes/why-choose-1-2.png"
        },
        {
            title: "Truly Passive",
            text: "Our team manages operations, reporting, and compliance so you invest effortlessly.",
            icon: "/assets/images/shapes/why-choose-1-3.png"
        },
        {
            title: "Clarity From Start To Exit",
            text: "Clear projections, regular updates, and a transparent exit strategy from day one.",
            icon: "/assets/images/shapes/why-choose-1-4.png"
        }
    ];

    return (
        <section className="invest-us">
            <div className="container">
                <div className="invest-us__header text-center">
                    <div className="invest-us__tag">
                        <h1>Why Invest With Us?</h1>
                    </div>
                    <h2 className="invest-us__title">
                        Beyond Property: You're Building a Business.<br />

                    </h2>
                    <h2 className="invest-us__titleline">We treat each fractional real estate asset in Hyderabad as an operational
business, focused on maximizing your long-term wealth — not just property
values.</h2>
                </div>

                <div className="invest-us__grid">
                    {values.map((value, index) => (
                        <div className="invest-us__card" key={index}>
                            <div className="invest-us__icon-wrap">
                                <img src={value.icon} alt={value.title} className="invest-us__icon" />
                            </div>
                            <div className="invest-us__content-card">
                                <h3 className="invest-us__card-title">{value.title}</h3>
                                <p className="invest-us__card-text">{value.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestUs;