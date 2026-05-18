import ProjectLayout from "../components/ProjectLayout";
import { useNavigate } from "react-router-dom";

import img from'../assets/images/live-build.png';
import img1 from '../assets/images/fiveElements/FE2.webp';
import img2 from '../assets/images/fiveElements/FE3.webp';
import img3 from '../assets/images/fiveElements/FE4.webp';
import img4 from '../assets/images/fiveElements/FE5.webp';
import img5 from '../assets/images/fiveElements/FE6.webp';
import img6 from '../assets/images/fiveElements/FE7.webp';

import icon1 from '../assets/images/shield.png';
import icon2 from '../assets/images/money.png';
import icon3 from '../assets/images/calendar.png';
import icon4 from '../assets/images/building.png';
import icon5 from '../assets/images/star.png';
import icon6 from '../assets/images/handshake.png';
const video =
  "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-new-housing-development-42626-large.mp4";

export default function Altilia() {
  
  return (
    <ProjectLayout
      title="ALTILIA by Five Elements Infra"
      location="Tukkuguda, Hyderabad"
      video={video}
      gallery={[
         img1,
                img2,
                img3,
                img4,
        // "https://via.placeholder.com/300",
        // "https://via.placeholder.com/300",
        // "https://via.placeholder.com/300",
        // "https://via.placeholder.com/300",
      ]}
      description="ALTILIA is an ultra-premium villa community with 4BHK villas, clubhouse, landscaped gardens, and luxury lifestyle amenities."

      stats={[
        { label: "Min Investment", value: "₹1 Crore+" },
        { label: "Projected Profit", value: "Premium Returns" },
        { label: "Tenure", value: "4–6 Years" },
      ]}
      // statusText="Premium Villas Available"
       bookingPercent={68}  
      totalValue="Exclusive Villa Investment"
      status="Premium Villas Available"

      highlights={[
        {
          icon: icon1,
          title: "Ultra Premium",
          subtitle: "Villa Community",
        },
        {
          icon: icon2,
          title: "Pre Launch Stage",
          subtitle: "Early Entry Benefit",
        },
        {
          icon: icon3,
          title: "4–6 Years",
          subtitle: "Holding Period",
        },
        {
          icon: icon4,
          title: "Luxury Villas",
          subtitle: "4BHK Gated Community",
        },
        {
          icon: icon5,
          title: "₹1 Crore+",
          subtitle: "Minimum Investment",
        },
        {
          icon: icon6,
          title: "High Returns",
          subtitle: "Premium Appreciation",
        },
      ]}
      mapUrl="https://www.google.com/maps?q=Tukkuguda+Hyderabad&output=embed"

      locationPoints={[
  { name: "ORR Exit", distance: "1 km" },
  { name: "Rajiv Gandhi International Airport", distance: "10 mins" },
  { name: "Wonderla", distance: "10 mins" },
  { name: "Financial District", distance: "25 mins" },
  { name: "HITEC City", distance: "30 mins" },
  { name: "Gachibowli", distance: "27 mins" },
  { name: "Future City, Mucherla", distance: "20 mins" },
  { name: "Manchester Global School", distance: "12 mins" },
]}
  projectUrl="https://www.fiveelementsinfra.com/altilia-campaign/?&srd=6900b5675d8def4a620abb10&utm_source=google&utm_medium=cpc&utm_campaign=RL_Google_Search_Brand&utm_term=five+elements+infra+tukkuguda"    />
  );
}
