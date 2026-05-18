import React from 'react';
import '../assets/css/withus.css';
// import icon1 from '../assets/images/Icon-1.png';
// import icon2 from '../assets/images/Icon-2.png';
// import icon3 from '../assets/images/clarity.png';
// import icon4 from "../assets/images/Icon-4.png";

import icon1 from '../assets/images/growth.png';
import icon2 from '../assets/images/search.png';
import icon3 from '../assets/images/return.png';
import icon4 from '../assets/images/income.png';
const InvestUs = () => {
    const values = [
        {

            title: "Value We Create",
            text: "We enhance asset value through professional management, strategic upgrades, and optimized leasing to drive long-term returns.",
            icon: icon1
        },
        {
            title: "Dual Returns",
            text: "Generate potential rental income during ownership and benefit from capital appreciation at exit.",
            icon: icon3
        },
        {
            title: "Truly Passive",
            text: "From operations and compliance to reporting and exit, we manage everything so you invest without daily involvement.",
            icon: icon4
        },
        {
            title: "Clarity From Start To Exit",
            text: "Clear projections, regular performance updates, defined exit strategy, and no hidden fees-shared upfront.",
            icon: icon2
        }
    ];

    return (
        <section className="invest-us">
            <div className="container">
                <div className="invest-us__header text-center">
                    <div className="invest-us__tag">
                        <h2>Why Invest With Us?</h2>
                    </div>
                    <h2 className="invest-us__title">
                        Beyond Property: You're Building a Business.<br />

                    </h2>
                    <h2 className="invest-us__titleline">We treat each asset as an operational business, focused on maximizing your long-term wealth, not just property values.</h2>
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