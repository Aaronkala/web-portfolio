import React from 'react';
import styled from 'styled-components';
import Timeline, { Event } from '../../components/timeline';
import career from '../../static/data/career.json';
import education from '../../static/data/education.json';

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <h2>Career</h2>
        <Timeline>
          {career.map(job => (
            <Event dateStart={job.date.start} dateEnd={job.date.end}>
              <Title>
                {job.title}
                {' // '}
                {job.position}
              </Title>
              <p>{job.description}</p>
            </Event>
          ))}
        </Timeline>
        <h2>Education</h2>
        <Timeline>
          {education.map(school => (
            <Event dateEnd={school.date.end}>
              <Title>{school.title}</Title>
              {school.subtitle && <SubTitle>{school.subtitle}</SubTitle>}
              {school.description && <p>{school.description}</p>}
            </Event>
          ))}
        </Timeline>
      </div>
    );
  }
}

const Title = styled.h3`
  margin: 0 0 0.5em 0;
`;

const SubTitle = styled.h4`
  margin-top: 5px;
`;
