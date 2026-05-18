import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/LiveProjects.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import img from "../assets/images/live-build.png";
import { API_BASE } from "../config/api";
import { Helmet } from "react-helmet-async";

export default function LiveProjects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const controller = new AbortController();

  fetch(API_BASE, { signal: controller.signal })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }
      return res.json();
    })
    .then((data) => {
      setProjects(data);
      setLoading(false);
    })
    .catch((err) => {
      // 👇 Ignore abort error
      if (err.name === "AbortError") {
        console.log("Fetch aborted");
        return;
      }

      console.error("API error:", err);
      setLoading(false);
    });

  return () => {
    controller.abort();
  };
}, []);



  return (
    <>
       <Helmet>
              <title>Live Investment Opportunities | Fractional Real Estate Hyderabad</title>
              <meta
          name="description"
          content="Explore live fractional real estate opportunities in Hyderabad. Invest in premium commercial and hospitality assets with targeted 18–22% IRR."
        />
            </Helmet>
      <Navbar />

      <section className="live-projects">
        <div className="container">
          {projects.length > 0 && 
          projects.map((project, index) => (
            <div className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`} key={project.id}>

              {/* LEFT */}
              <div className="project-media">
                {/* <video controls poster={img}>
                  <source src={project.video} type="video/mp4" />
                </video> */}
                <img 
  src={project.images && project.images.length > 0 ? project.images[0] : img} 
  alt={project.title} 
  className="project-main-image" 
/>

                <div className="project-thumbs-wrapper">
  <div className="project-thumbs-track">
    {[...project.images, ...project.images].map((img, i) => (
      <img key={i} src={img} alt="" />
    ))}
  </div>
</div>

              </div>

              {/* RIGHT */}
              <div className="project-info">
                <span className="builder-tag">{project.builder}</span>

                <h2>{project.title}</h2>
                <p className="location">📍 {project.location}</p>

                <p className="description">{project.description}</p>

                <div className="stats">
                  {project.stats.map((s, i) => (
                    <div className="stat-box" key={i}>
                      <h4>{s.value}</h4>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>

                <h3 className="investment-type">{project.totalValue}</h3>

                {/* {project.progress && (
                  <div className="progress-wrapper">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                      <span className="progress-text">{project.status}</span>
                    </div>
                  </div>
                )} */}

{project.progress && (
  <div className="progress-wrapper">
    <div className="progress-bar">

      {/* Filled part */}
      <div
        className="progress-fill"
        style={{ width: `${project.progress}%` }}
      ></div>

      {/* Left text */}
      <span className="progress-text-left">
        {project.status}
      </span>

      {/* Right text */}
      <span className="progress-amount-right">
        {project.raisedValue}
      </span>

    </div>
  </div>
)}

               <a
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="view-btn-li">View Project</button>
      </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
