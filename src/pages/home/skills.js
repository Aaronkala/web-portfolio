import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Block from '../../components/skillBlock/skillBlock';
import skillData from '../../static/data/skills.json';

export default () => {
  // TODO: Change skills mapping to a reducer
  // BODY: It can be a reducer or a for loop. So that we don't need to loop them 2 times on each render
  const programming_skills = skillData.filter(
    skill => skill.type === 'Programming',
  );
  const design_skills = skillData.filter(skill => skill.type === 'Design');
  return (
    <div>
      <h2>Expertise</h2>
      <Group>
        <h3>Programming</h3>
        {/* TODO: move skill lists to separate file */}
        <Box flex>
          {programming_skills.map(skill => (
            <Block mr="3" mb="3" variant="primary" key={skill.name}>
              {skill.name}
            </Block>
          ))}
        </Box>
      </Group>
      <Group>
        <h3>Design</h3>
        <Box>
          {design_skills.map(skill => (
            <Block mr="3" mb="3" variant="primary" key={skill.name}>
              {skill.name}
            </Block>
          ))}
        </Box>
      </Group>
    </div>
  );
};

const Group = styled.div`
  margin-bottom: 1em;
`;
