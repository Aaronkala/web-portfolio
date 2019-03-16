import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle, Hr } from '../../../components/elements';
import Filter from './filter';
import ProjectList from './projectList';

const Projects = ({ filter }) => {
  return (
    <Spacer>
      <Title>Projects</Title>
      <Hr />
      <Filter filter={filter} />
      <Hr long />
      <ProjectList filter={filter} />
    </Spacer>
  );
};

const Spacer = styled.section`
  margin-top: 10em;
  @media (max-width: ${p => p.theme.breakpoints.xl}) {
    padding: 0 15px;
  }
`;

export default Projects;
