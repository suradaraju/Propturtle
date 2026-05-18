import { useState, useEffect, useRef } from "react";
// import "./FaqCarousel.css";
import Logo from "../assets/images/Logo1.png";
import Rightarrow from "../assets/images/rightarrow.gif";

const faqs = [
  {
    title: "What exactly am I investing in?",
    desc: `A fractional ownership stake in an income-generating real estate business.

Each opportunity is a professionally structured asset designed for income and long-term value.`,
  },
  {
    title: "Do I own real estate or just a financial product?",
    desc: "Your investment represents direct ownership in the underlying asset through a legally structured entity, not a REIT, mutual fund, or debt product.",
  },
  {
    title: "How does fractional ownership work?",
    desc: "Each investor holds a defined ownership share, enabling access to premium real estate with lower ticket sizes and professional management.",
  },
  {
    title: "Who manages the property and day-to-day operations?",
    desc: "PropTurtle manages the asset end-to-end, from structuring and development to leasing, operations, and reporting.",
  },
  {
    title: "How are returns generated?",
    desc: "Real estate investments involve risk, and returns are not guaranteed.",
  },
];

// constants (UNCHANGED)
const CARD_WIDTH_DESKTOP = 250;
const GAP_DESKTOP = 40;
const CARD_WIDTH_MOBILE = 280;
const GAP_MOBILE = 20;

export default function FaqCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const carouselRef = useRef(null);

  /* screen resize */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* sync active card while scrolling (mobile) */
  useEffect(() => {
    if (!isMobile) return;

    const el = carouselRef.current;

    const onScroll = () => {
      const cardSize = CARD_WIDTH_MOBILE + GAP_MOBILE;
      const newIndex = Math.round(el.scrollLeft / cardSize);
      setIndex(Math.min(Math.max(newIndex, 0), faqs.length - 1));
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* arrows */
  const next = () => {
    if (isMobile) {
      carouselRef.current.scrollBy({
        left: CARD_WIDTH_MOBILE + GAP_MOBILE,
        behavior: "smooth",
      });
    } else if (index < faqs.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (isMobile) {
      carouselRef.current.scrollBy({
        left: -(CARD_WIDTH_MOBILE + GAP_MOBILE),
        behavior: "smooth",
      });
    } else if (index > 0) {
      setIndex(index - 1);
    }
  };

  const translateX = index * (CARD_WIDTH_DESKTOP + GAP_DESKTOP);

  return (
    <section className="faq-section" id="faq">

      {/* HEADER */}
      <div className="faq-header">
        <div>
          <h2 className="faq-head">
            Frequently <br />
            <span className="ask">Asked</span>{" "}
            <span className="gold">Questions</span>
          </h2>
        </div>

        <div className="faq-desc">
          <p>
            Explore answers to common questions about fractional ownership, investment
structure, and how PropTurtle delivers secure and transparent real estate
investments.
          </p>
        </div>
      </div>

      <div className="faq-arrows faq-arrows-bottom desktop-only">
        <button onClick={prev} disabled={index === 0}>
          <img src={Rightarrow} className="flip-arrow" />
        </button>
        <button onClick={next} disabled={index === faqs.length - 1}>
          <img src={Rightarrow} />
        </button>
      </div>

      {/* CAROUSEL */}
      <div className="faq-carousel" ref={carouselRef}>
        <div
          className="faq-track"
          style={{ transform: isMobile ? "none" : `translateX(-${translateX}px)` }}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-card ${index === i ? "active" : ""}`}
              onClick={() => isMobile && setIndex(i)}
            >
              <img src={Logo} alt="logo" className="faq-logo" />
              <h4 className="faq-title">{item.title}</h4>
              <div className="faq-content">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ARROWS (ONLY ONCE) */}
      <div className="faq-arrows faq-arrows-bottom mobile-only">
        <button onClick={prev} disabled={index === 0}>
          <img src={Rightarrow} className="flip-arrow" />
        </button>
        <button onClick={next} disabled={index === faqs.length - 1}>
          <img src={Rightarrow} />
        </button>
      </div>

    </section>
  );
}