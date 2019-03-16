import React from 'react';
import styled from 'styled-components';

import projectData from '../../../static/data/projects.json';
import ProjectListItem from './projectListItem';

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
  return (
    <Grid>
      {filterProjects(projectData, filter).map(project => (
        <ProjectListItem key={project.title} project={project} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 50px;
`;

export default ProjectList;