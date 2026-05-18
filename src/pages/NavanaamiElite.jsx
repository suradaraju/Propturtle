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

export default function NavanaamiElite() {
  return (
    <ProjectLayout
      title="Navanaami Elite"
      location="Hyderabad"
      video={video}
      gallery={[
        img,
        img,
        img,
        img,
        // "https://via.placeholder.com/300",
        // "https://via.placeholder.com/300",
        // "https://via.placeholder.com/300",
        // "https://via.placeholder.com/300",
      ]}
      description="Navanaami Elite offers elegant residences designed with superior craftsmanship and excellent long-term investment value."

      stats={[
        { label: "Min Investment", value: "₹40 Lakhs+" },
        { label: "Projected Profit", value: "Stable Growth" },
        { label: "Tenure", value: "3–4 Years" },
      ]}
      bookingPercent={68}  
      totalValue="Residential Investment Opportunity"
      status="Booking Open"

      highlights={[
        {
          icon: icon1,
          title: "Premium Project",
          subtitle: "Grade A Builder",
        },
        {
          icon: icon2,
          title: "Early Stage Entry",
          subtitle: "Best Price Advantage",
        },
        {
          icon:  icon3,
          title: "3–4 Years",
          subtitle: "Holding Period",
        },
        {
          icon:  icon4,
          title: "Residential Asset",
          subtitle: "High End Apartments",
        },
        {
          icon:  icon5,
          title: "₹40 Lakhs+",
          subtitle: "Minimum Investment",
        },
        {
          icon:  icon6,
          title: "Stable Returns",
          subtitle: "Capital Appreciation",
        },
      ]}
    />
  );
}
