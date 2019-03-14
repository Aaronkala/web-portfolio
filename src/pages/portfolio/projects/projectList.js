import React from 'react';
import styled from 'styled-components';

import SkillBlock from '../../../components/skill-block';
import projectData from '../../../static/data/projects.json';

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
        <ProjectItem key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div>
            {project.skills.slice(0, 7).map(skill => (
              <SkillBlock skill={skill.name} key={skill.id}>
                {skill.name}
              </SkillBlock>
            ))}
          </div>
        </ProjectItem>
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

const ProjectItem = styled.section`
  display: block;
`;

export default ProjectList;
