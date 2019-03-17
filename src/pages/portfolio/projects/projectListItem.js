import React, { useState } from 'react';
import styled from 'styled-components';

import SkillBlock from '../../../components/skill-block';
import { ButtonTransparent } from '../../../components/elements';

const ProjectListItem = ({ project }) => {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <ProjectItem key={project.title}>
      <Title>{project.title}</Title>
      <TimeSpan>
        {project.date.start} - {project.date.end ? project.date.end : 'ongoing'}
      </TimeSpan>
      <p>{project.description}</p>
      <div>
        {project.skills.slice(0, 7).map(skill => (
          <SkillBlock skill={skill.name} key={skill.id}>
            {skill.name}
          </SkillBlock>
        ))}
        {showSkills &&
          project.skills.slice(7).map(skill => (
            <SkillBlock skill={skill.name} key={skill.id}>
              {skill.name}
            </SkillBlock>
          ))}
        {showSkills && project.skills.length > 7 && (
          <ButtonTransparent as="button" onClick={() => setShowSkills(false)}>
            Hide some
          </ButtonTransparent>
        )}
        {!showSkills && project.skills.length > 7 && (
          <ButtonTransparent as="button" onClick={() => setShowSkills(true)}>
            Show all
          </ButtonTransparent>
        )}
      </div>
    </ProjectItem>
  );
};

const ProjectItem = styled.section`
  display: block;
  margin-bottom: 1em;
`;

const Title = styled.h2`
  margin-bottom: 0.2em;
`;

const TimeSpan = styled.p`
  margin-bottom: 0.5em;
  font-style: italic;
`;

export default ProjectListItem;
