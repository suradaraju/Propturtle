import "../assets/css/ProjectLayout.css";
import img from '../assets/images/live-build.png';
import ProjectMetrics from "./ProjectMetrics";
import Navbar from "./Navbar";
import Footer from "./footer";
import icon1 from '../assets/images/Note.png';
import icon2 from '../assets/images/finance.png';
import icon3 from '../assets/images/marketvalue.png';
import icon4 from '../assets/images/investment.png';

// Real estate video
const realEstateVideo =
  "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-new-housing-development-42626-large.mp4";

// Real estate thumbnails (150x150)
const realEstateThumbnails = [
  img,
  img,
  img,
  img,
];

export default function ProjectLayout({
  title,
  location,
  description,
  video = realEstateVideo,
  gallery = realEstateThumbnails,
  stats = [],
  totalValue,
  status,
  statusText,
  bookingPercent,
  highlights = [],
 locationPoints = [],
 mapUrl,
 projectUrl,
}) {
  return (
    <>
      <Navbar />
      {/* MAIN SECTION */}
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-grid">
            {/* LEFT */}
            

            {/* RIGHT */}
          {/* LEFT - CONTENT */}
<div className="project-right">
  <h1>{title}</h1>
  <p className="location">📍 {location}</p>

  <p className="description">{description}</p>

  <div className="project-stats">
    {stats.map((item, i) => (
      <div key={i}>
        <h3>{item.value}</h3>
        <span>{item.label}</span>
      </div>
    ))}
  </div>

  <h2 className="price">{totalValue}</h2>
  {/* <div className="status-l">{statusText}</div> */}

  {/* PROGRESS BAR */}
<div className="project-progress-wrapper">
  <div className="project-progress-bar">
    <div
      className="project-progress-fill"
      style={{ width: `${bookingPercent}%` }}   // example: 65
    ></div>
    <div className="project-progress-text">
      {bookingPercent}% Booked • Booking Open
    </div>
  </div>
</div>
 <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="view-btn-li">View Project</button>
      </a>
</div>

{/* RIGHT - MEDIA */}
<div className="project-left">
  <video controls width={800} height={450} style={{ objectFit: "cover" }}>
    <source src={video} type="video/mp4" />
  </video>

  <div className="project-gallery">
    {gallery.map((img, i) => (
      <img key={i} src={img} alt="gallery" />
    ))}
  </div>
</div>

          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      {/* <section className="project-highlights">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <div className="highlight-card" key={i}>
                <img src={item.icon} alt="" />
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* PROJECT LOCATION SECTION */}
{/* PROJECT LOCATION SECTION */}
{/* LOCATION SECTION */}
<section className="project-location-section">
  <div className="container">
    <h2 className="location-title">📍 Project Location</h2>

    <div className="location-grid">
      {/* LEFT - MAP */}
      <div className="location-map">
       <iframe 
      //  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31019.09957740038!2d79.39661591491223!3d13.634179901694168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4152d1daca0cac!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1769168958056!5m2!1sen!2sin" 
      src={mapUrl} 
      width="600" 
       height="450" 
       style={{border:"0"}} 
      //  allowfullscreen="" 
      //  loading="lazy" 
      //  referrerpolicy="no-referrer-when-downgrade"
       >

       </iframe>
      </div>

      {/* RIGHT - CONTENT */}
      <div className="location-content">
        <h3>{location}</h3>

        <ul>
          {locationPoints.map((item, i) => (
            <li key={i}>
              <span>{item.name}</span>
              <strong>{item.distance}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

<ProjectMetrics metrics={[
  {
    icon: icon1, // replace with your icons
    value: "25 Crores",
    label: "Investment",
    subtitle: "~38,000 sq.ft Acquired",
  },
  {
    icon: icon2,
    value: "38 Crores",
    label: "Inventory Value",
    subtitle: "Current value in 2025",
  },
  {
    icon: icon3,
    value: "₹ 9,250 / SFT",
    label: "Market Price",
    subtitle: "2.5 & 3 BHK Flats",
  },
  {
    icon: icon4,
    value: "₹ 6,250 / SFT",
    label: "FabInvest Price",
    subtitle: "~35% Discounted Acquisition",
  },
]} />

      <Footer />
    </>
  );
}
