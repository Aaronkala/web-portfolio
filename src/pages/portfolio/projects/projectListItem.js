import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'react-image';

import SkillBlock from '../../../components/skill-block';
import { ButtonTransparent } from '../../../components/elements';

const ProjectListItem = ({ project }) => {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <ProjectItem key={project.title}>
      <Link href={project.link}>
        <Banner src={`${process.env.PUBLIC_URL}/img/${project.banner}`} />
      </Link>
      <Title>
        <Link href={project.link}>{project.title}</Link>
      </Title>
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

const Banner = styled(Img)`
  width: 100%;
  border-radius: 3px;
`;

const ProjectItem = styled.section`
  display: block;
`;

const Title = styled.h2`
  margin-top: 0.8em;
  margin-bottom: 0.5em;
`;

const TimeSpan = styled.p`
  margin-bottom: 0.5em;
  font-style: italic;
`;

const Link = styled.a`
  width: max-content;
  display: inline;
  color: ${p => p.theme.color.primary};
`;

export default ProjectListItem;
