import React from "react";
import styled from "styled-components";

import ProjectListItem from "./projectListItem";
import projectData from "../../../../static/data/projects.json";

const ProjectList = ({ filter }) => {
  const filterProjects = (data, fil) => {
    if (fil) {
      return data.filter((project, index, self) => {
        const skillsLength = project.skills.length;
        for (let i = 0; i < skillsLength; i += 1) {
          if (project.skills[i].id === fil) {
            return true;
          }
        }
        return false;
      });
    }
    return data;
  };

  const filteredProjects = filterProjects(projectData, filter);

  return (
    <Grid>
      {filteredProjects.length > 0 ? (
        filteredProjects.map(project => (
          <ProjectListItem key={project.title} project={project} />
        ))
      ) : (
        <p>No projects found with filter: {filter}</p>
      )}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  @media (${p => p.theme.mediaQueries.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default ProjectList;
