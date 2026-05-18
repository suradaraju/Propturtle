import React from "react";
import "../assets/css/ProjectLayout.css"; // Assuming styles go here

export default function ProjectMetrics({ metrics = [] }) {
  return (
    <section className="project-metrics">
      <div className="container">
        <h2>📊 Metrics</h2>
        <p>~{metrics.length} Flats Acquisition</p>

        <div className="metrics-grid">
          {metrics.map((item, i) => (
            <div className="metric-card" key={i}>
              <img src={item.icon} alt={item.title} className="metric-icon" />
              <h3>{item.value}</h3>
              <p>{item.label}</p>
              {item.subtitle && <span>{item.subtitle}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
