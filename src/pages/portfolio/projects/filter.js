import React from 'react';
import SkillBlock from '../../../components/skill-block';
import projectData from '../../../static/data/projects.json';

const Filter = ({ filter }) => {
  const GetSkills = () => {
    const skills = [];
    for (let i = 0; i < projectData.length; i += 1) {
      skills.push(...projectData[i].skills);
    }

    const valueList = [];
    function onlyUnique(value, index, self) {
      valueList.push(value.name);
      return valueList.indexOf(value.name) === index;
    }

    return skills.filter(onlyUnique);
  };
  return (
    <div>
      {GetSkills().map(skill => (
        <SkillBlock active={filter == skill.id}>{skill.name}</SkillBlock>
      ))}
    </div>
  );
};

export default Filter;
