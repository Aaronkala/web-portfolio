import React from 'react';
import styled from 'styled-components';
import Block from '../../components/skillBlock/skillBlock';
import skillData from '../../static/data/skills.json';

export default () => {
  const programming_skills = skillData.filter(
    skill => skill.type === 'Programming',
  );
  const design_skills = skillData.filter(skill => skill.type === 'Design');
  return (
    <div>
      <h2>Expertise</h2>
      <Group>
        <h3>Programming</h3>
        <List>
          {programming_skills.map(skill => (
            <Block key={skill.name}>{skill.name}</Block>
          ))}
        </List>
      </Group>
      <Group>
        <h3>Design</h3>
        <List>
          {design_skills.map(skill => (
            <Block key={skill.name}>{skill.name}</Block>
          ))}
        </List>
      </Group>
    </div>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Group = styled.div`
  margin-bottom: 1em;
`;
