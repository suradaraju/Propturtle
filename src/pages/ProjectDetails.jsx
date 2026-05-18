import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectLayout from "../components/ProjectLayout";
import '../assets/css/ProjectLayout.css';
import { API_BASE } from "../config/api";

export default function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/${slug}`)
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error(err));
  }, [slug]);

  if (!project) return null;

  return (
    <ProjectLayout
      title={project.title}
      location={project.location}
      description={project.description}
      video={project.video}
      gallery={project.images}
      stats={project.stats}
      totalValue={project.totalValue}
      bookingPercent={project.progress}
      statusText={project.statusText}
    //   mapUrl={project.mapUrl}
      locationPoints={project.locationPoints}
    //   highlights={project.highlights}
      projectUrl={project.projectUrl}
    />
  );
}
