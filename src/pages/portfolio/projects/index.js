import React from 'react';
import { Heading } from 'rebass';
import Hr from '../../../components/hr/hr';
import Filter from './filter';
import ProjectList from './projectList';

const Projects = ({ filter }) => {
  return (
    <React.Fragment>
      <Heading fontSize={6}>Projects</Heading>
      <Hr />
      <Filter filter={filter} />
      <Hr long />
      <ProjectList filter={filter} />
    </React.Fragment>
  );
};

export default Projects;
