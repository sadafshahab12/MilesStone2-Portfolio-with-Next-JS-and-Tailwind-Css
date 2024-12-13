import React from "react";
import Project from "../components/Project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Portfolio",
};
const Projects = () => {
  return (
    <div>
      <Project />
    </div>
  );
};

export default Projects;
