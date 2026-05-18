import ProjectLayout from "../components/ProjectLayout";
import img from'../assets/images/live-build.png';
import icon1 from '../assets/images/shield.png';
import icon2 from '../assets/images/money.png';
import icon3 from '../assets/images/calendar.png';
import icon4 from '../assets/images/building.png';
import icon5 from '../assets/images/star.png';
import icon6 from '../assets/images/handshake.png';
const video =
  "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-new-housing-development-42626-large.mp4";

export default function NavanaamiMegaleio() {
  return (
      <ProjectLayout
      title="EON Hyderabad"
      location="Financial District, Nanakramguda, Hyderabad"
      video={video}
      gallery={[img, img, img, img]}

      description="EON Hyderabad is a Grade-A commercial landmark designed to propel the future of workplace harmony in the Financial District. It offers premium office spaces with world-class amenities, sustainable design, and unmatched connectivity." 

      stats={[
        { label: "Grade-A Commercial Space", value: "Premium Office Spaces" },
        { label: "Location", value: "Financial District, Hyderabad" },
        { label: "Office Floor Configurations", value: "Flexible Layouts" },
      ]}

      // bookingPercent={0}
      totalValue="Modern Business Destination"
      statusText="Now Open for Leasing"
      bookingPercent={42}

      highlights={[
        {
          icon: icon1,
          title: "Prime Financial Hub",
          subtitle: "Located in Nanakramguda’s Financial District",
        },
        {
          icon: icon2,
          title: "Flexible Office Spaces",
          subtitle: "Starting from ~2,900+ sq.ft.",
        },
        {
          icon: icon3,
          title: "Sustainable Design",
          subtitle: "Eco-friendly with modern systems",
        },
        {
          icon: icon4,
          title: "Food Court",
          subtitle: "International cuisine offerings",
        },
        {
          icon: icon5,
          title: "Fitness & Wellness",
          subtitle: "Fully-equipped fitness centre",
        },
        {
          icon: icon6,
          title: "Childcare Facilities",
          subtitle: "Work-friendly environment",
        },
      ]}

      mapUrl="https://www.google.com/maps?q=Financial+District+Nanakramguda+Hyderabad&output=embed"

      locationPoints={[
        { name: "Outer Ring Road", distance: "Minutes Away" },
        { name: "Rajiv Gandhi Intl Airport", distance: "20 mins Drive" },
        { name: "HITEC City", distance: "Nearby" },
        { name: "High-end Residential Nodes", distance: "Short Commute" },
      ]}

      projectUrl="https://www.navanaami.com/eon-hyderabad-new/"
    />
  );
}
