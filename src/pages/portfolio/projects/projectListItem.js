import React, { useState } from 'react';
import styled from 'styled-components';

import SkillBlock from '../../../components/skill-block';
import { ButtonTransparent } from '../../../components/elements';

const ProjectListItem = ({ project }) => {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <ProjectItem key={project.title}>
      <h2>{project.title}</h2>
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
        {showSkills ? (
          <ButtonTransparent as="button" onClick={() => setShowSkills(false)}>
            Hide some
          </ButtonTransparent>
        ) : (
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
`;

export default ProjectListItem;
