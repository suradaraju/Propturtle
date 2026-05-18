import LinkedIn from '../assets/images/Media/LinedIn-Media.png';
import LinkedIn1 from '../assets/images/Media/LinkedIn.png';
import PTI from '../assets/images/Media/PTI.png';
import PTI1 from '../assets/images/Media/wire-logo.svg';
import tribune from '../assets/images/Media/The-tribune.png';
import tribune1 from '../assets/images/Media/tribune.webp';
import business from '../assets/images/Media/businessreviewlive.png';
import business1 from '../assets/images/Media/businessreviewlive-logo.jpg';
import img1 from '../assets/LOGO/india express news feed.png';
import img2 from '../assets/LOGO/India express news.png';
import img3 from '../assets/LOGO/india press connect.png';
import img4 from '../assets/LOGO/India Today.png';
import img5 from '../assets/LOGO/India Wire.png';
import img6 from '../assets/LOGO/indian news daily update.png';
import img7 from '../assets/LOGO/Karnataka News.png';
import img8 from '../assets/LOGO/Mizoram news.png';
import img9 from '../assets/LOGO/News Eagle India.png';
import img10 from '../assets/LOGO/The Blue Print.png';
import img11 from '../assets/LOGO/The Hindu express.png';
import { FaNewspaper, FaBullhorn, FaGlobeAsia, FaUsers } from "react-icons/fa";
import '../assets/css/InMedia.css';



export default function Media() {
  const mediaLinks = [
    {
      img: LinkedIn1,
      url: "https://www.linkedin.com/posts/business-review-live_propturtle-launches-development-first-fractional-activity-7423302797468700672-ZG-n/", // replace with actual link
      alt: "LinkedIn Media"
    },
    {
      img: PTI1,
      url: "https://thewire.in/ptiprnews/propturtle-launches-development-first-fractional-real-estate-investment-platform-targeting-18-22-percent-irr", // replace with actual link
      alt: "PTI News"
    },
    {
      img: tribune1,
      url: "https://www.tribuneindia.com/news/business/propturtle-launches-development-first-fractional-real-estate-investment-platform-targeting-18-22-percent-irr/", // replace with actual link
      alt: "The Tribune"
    },
    {
      img: business1,
      url: "https://businessreviewlive.com/propturtle-launches-development-first-fractional-real-estate-platform-targeting-18-22-irr/", // replace with actual link
      alt: "Business Review Live"
    },

    {
      img: img1,
      url: "https://indianexpressnewsfeed.co.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "IB "
    },


    {
      img: img2,
      url: "https://indianexpressnews.co.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "LinkedIn Media"
    },
    {
      img: img3,
      url: "https://indianpressconnect.co.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "PTI News"
    },
    {
      img: img4,
      url: "https://indiatodayheadlines.co.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "The Tribune"
    },
    {
      img: img5,
      url: "https://indiawirenews.co.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "Business Review Live"
    },
    {
      img: img6,
      url: "https://indiannewsdailyupdate.co.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "India News Network"
    },

    {
      img: img7,
      url: "https://karnatakanewsnetwork.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "IB "
    }
    , {
      img: img8,
      url: "https://mizoramnewsvoice.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "IB "
    },
    {
      img: img9,
      url: "https://newseagleindia.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "IB "
    },
    {
      img: img10,
      url: "https://theblunttimes.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/62430/", // replace with actual link
      alt: "IB "
    },
    {
      img: img11,
      url: "https://thehindustanexpress.co.in/propturtle-redefines-fractional-real-estate-in-hyderabad-with-a-development-first-investment-model/", // replace with actual link
      alt: "IB "
    }



  ];

  return (
    <div className="media-container">
      <h4 className="in-meadia">
        PropTurtle has been featured in leading media publications <br />

        <span className="ingold">showcasing our approach to fractional real estate and long-term wealth creation.</span>
      </h4>
      {/* <h4>PropTurtle has been featured in leading media publications,<br/> showcasing our approach to fractional real estate and long-term wealth creation.</h4> */}
      <div className="media-carousel">
        <div className='media-box media-track'>

          {[...mediaLinks, ...mediaLinks].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="media-card"
            >
              <img src={item.img} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
      <div className="featured-line">
        <span className="line"></span>
        <p>
          Featured Across <span className="highlight">30+</span> Media Platforms
        </p>
        <span className="line"></span>
      </div>

      <div className="media-stats">

        <div className="stat-item">
          <div className="icon"><FaNewspaper /></div>
          <h3><span>30+</span><br />Media Platforms</h3>
          <p>Covering PropTurtle’s journey and vision</p>
        </div>

        <div className="divider"></div>

        <div className="stat-item">
          <div className="icon"><FaBullhorn /></div>
          <h3><span>200+</span><br />Mentions</h3>
          <p>Across leading news portals and digital publications</p>
        </div>

        <div className="divider"></div>

        <div className="stat-item">
          <div className="icon"><FaGlobeAsia /></div>
          <h3><span>Pan-India</span><br />Coverage</h3>
          <p>From regional to national media outlets</p>
        </div>

        <div className="divider"></div>

        <div className="stat-item">
          <div className="icon"><FaUsers /></div>
          <h3><span>Trusted by</span><br />Investors</h3>
          <p>Building trust through transparency and visibility</p>
        </div>

      </div>

      {/* <p className="media-note">
  This coverage reflects PropTurtle’s commitment to innovation, transparency, and creating long-term value for investors.
</p> */}


    </div>
  );
}