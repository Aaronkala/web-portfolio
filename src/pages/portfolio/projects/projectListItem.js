import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Flex, Button, Image } from 'rebass';
import { justifyContent, display } from 'styled-system';

import SkillBlock from '../../../components/skillBlock/skillBlock';
import SvgGit from './gitLogo';

// TODO: add github links to projects
const ProjectListItem = ({ project }) => {
  const [showSkills, setShowSkills] = useState(false);
  return (
    <ProjectItem key={project.title}>
      <Link href={project.link}>
        <Banner src={`${process.env.PUBLIC_URL}/img/${project.banner}`} />
      </Link>
      <Flex justifyContent="space-between">
        <Box>
          <Title>
            <Link href={project.link}>{project.title}</Link>
          </Title>
          <TimeSpan>
            {project.date.start} -{' '}
            {project.date.end ? project.date.end : 'ongoing'}
          </TimeSpan>
        </Box>
        {project['version-control'] && (
          <Flex alignItems="center">
            <a href={project['version-control']} title="link to repository">
              <SvgGit />
            </a>
          </Flex>
        )}
      </Flex>
      <p>{project.description}</p>
      <div>
        {project.skills.slice(0, 7).map(skill => (
          <SkillBlock
            mr={3}
            mb={3}
            variant="primary"
            skill={skill.name}
            key={skill.id}
          >
            {skill.name}
          </SkillBlock>
        ))}
        {showSkills &&
          project.skills.slice(7).map(skill => (
            <SkillBlock
              mr={3}
              mb={3}
              variant="primary"
              skill={skill.name}
              key={skill.id}
            >
              {skill.name}
            </SkillBlock>
          ))}
        {showSkills && project.skills.length > 7 && (
          <Button
            variant="primary"
            mr={3}
            mb={3}
            as="button"
            onClick={() => setShowSkills(false)}
          >
            Hide some
          </Button>
        )}
        {!showSkills && project.skills.length > 7 && (
          <Button
            variant="primary"
            mr={3}
            mb={3}
            as="button"
            onClick={() => setShowSkills(true)}
          >
            Show all
          </Button>
        )}
      </div>
    </ProjectItem>
  );
};

const Banner = styled(Image)`
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
  color: ${p => p.theme.colors.primary};
`;

export default ProjectListItem;
