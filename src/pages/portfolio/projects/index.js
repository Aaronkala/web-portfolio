import React from 'react';

import { Title, Hr } from '../../../components/elements';
import Filter from './filter';
import ProjectList from './projectList';

const Projects = ({ filter }) => {
  return (
    <React.Fragment>
      <Title>Projects</Title>
      <Hr />
      <Filter filter={filter} />
      <Hr long />
      <ProjectList filter={filter} />
    </React.Fragment>
  );
};

export default Projects;
