import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Timeline, { Event } from '../../components/timeline/timeline';
import career from '../../static/data/career.json';
import education from '../../static/data/education.json';

export default props => {
  const header = (main, secondary) => {
    return `${main} // ${secondary}`;
  };
  return (
    <Box as="section" {...props}>
      <h2>Career</h2>
      <Timeline>
        {career.map(job => (
          <Event
            key={`${job.title}-${job.date.start}`}
            dateStart={job.date.start}
            dateEnd={job.date.end}
          >
            <Title>
              {job.link ? (
                <Link href={job.link}>{`${job.title}`}</Link>
              ) : (
                job.title
              )}
              {` // ${job.position}`}
            </Title>
            <p>{job.description}</p>
          </Event>
        ))}
      </Timeline>
      <h2>Education</h2>
      <Timeline>
        {education.map(school => (
          <Event
            key={`${school.title}-${school.date.end}`}
            dateEnd={school.date.end}
          >
            <Title>
              {school.title ? header(school.title, school.type) : school.type}
            </Title>
            {school.subtitle && <SubTitle>{school.subtitle}</SubTitle>}
            <Location>{school.location}</Location>
            {school.description && <p>{school.description}</p>}
          </Event>
        ))}
      </Timeline>
    </Box>
  );
};

const Title = styled.h3`
  margin: 0 0 0.5em 0;
`;

const SubTitle = styled.h4`
  margin-top: 5px;
`;

const Link = styled.a`
  color: ${p => p.theme.colors.primary};
`;

const Location = styled.p`
  margin-bottom: 5px;
  font-style: italic;
`;
