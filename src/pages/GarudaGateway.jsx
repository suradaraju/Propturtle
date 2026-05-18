import ProjectLayout from "../components/ProjectLayout";
import img from "../assets/images/live-build.png";
import img1 from '../assets/images/Garuda/GA1.png';
import img2 from '../assets/images/Garuda/GA1.webp';
import img3 from '../assets/images/Garuda/GA2.webp';
import icon1 from "../assets/images/shield.png";
import icon2 from "../assets/images/money.png";
import icon3 from "../assets/images/calendar.png";
import icon4 from "../assets/images/building.png";
import icon5 from "../assets/images/star.png";
import icon6 from "../assets/images/handshake.png";

const video =
  "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-new-housing-development-42626-large.mp4";

export default function GarudaGateway() {
  return (
    <ProjectLayout
      title="The Garuda Gateway"
      location="Tirupati, Andhra Pradesh (3 km from Airport)"
      video={video}
      gallery={[
        img,
        img1,
        img2,
        img3,
      ]}
      description="Premium business hotel near Tirupati Airport with high footfall, year-round
pilgrimage demand, and guaranteed occupancy."

      stats={[
        { label: "Min Investment", value: "₹50 Lakhs" },
        { label: "Target Yield", value: "18% – 24%" },
        { label: "Target IRR", value: "22% – 30%" },
      ]}

      totalValue="Premium Hotel Room Ownership"

      statusText="Limited Inventory • Pre-Booking Open"
      bookingPercent={42}   // 🔥 change this number anytime

      highlights={[
        {
          icon: icon1,
          title: "Branded Hotel",
          subtitle: "National Operator",
        },
        {
          icon: icon2,
          title: "Passive Income",
          subtitle: "Hassle-Free Ownership",
        },
        {
          icon: icon3,
          title: "5+ Years",
          subtitle: "Operating Asset",
        },
        {
          icon: icon4,
          title: "Prime Location",
          subtitle: "3 km from Airport",
        },
        {
          icon: icon5,
          title: "18–24%",
          subtitle: "Target Yield",
        },
        {
          icon: icon6,
          title: "High Demand",
          subtitle: "Pilgrimage + Transit",
        },
      ]}
      mapUrl="https://www.google.com/maps?q=Tirupati+International+Airport&output=embed"
      locationPoints={[
  { name: "Tirupati International Airport", distance: "3 km" },
  { name: "Tirupati Railway Station", distance: "4 km" },
  { name: "Tirumala Temple", distance: "22 km" },
  { name: "APSRTC Bus Stand", distance: "3.5 km" },
  { name: "City Center", distance: "2 km" },
  { name: "Renigunta", distance: "8 km" },
]}
  projectUrl="https://tirupati.anantacore.com/"
    />
  );
}
