import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import { withTheme } from 'styled-components';

import projectData from '../../../static/data/projects.json';

const customStyles = theme => ({
  menu: (provided, state) => ({
    ...provided,
    maxWidth: 400,
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: state.isSelected || state.isFocused ? 'white' : theme.color.primary,
    backgroundColor:
      state.isSelected || state.isFocused ? theme.color.primary : 'white',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
  clearIndicator: (provided, state) => {
    return {
      ...provided,
      color: theme.color.alert,
    };
  },
  indicatorSeparator: (provided, state) => {
    return {
      ...provided,
      backgroundColor: 'white',
    };
  },
  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      color: 'white',
    };
  },
  control: provided => ({
    ...provided,
    maxWidth: 400,
    backgroundColor: theme.color.primary,
    borderRadius: 0,
    border: 0,
    color: 'white',
    boxShadow: `4px 4px 0px 0px ${theme.color.secondary}`,
    cursor: 'pointer',
  }),
  input: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
});

const GetSkills = () => {
  let s = [];
  for (let i = 0; i < projectData.length; i += 1) {
    s.push(...projectData[i].skills);
  }
  s = s.sort((a, b) => a.id > b.id);
  const valueList = [];
  function onlyUnique(value, index, self) {
    valueList.push(value.name);
    return valueList.indexOf(value.name) === index;
  }

  return s.filter(onlyUnique);
};

const Filter = ({ filter = '', theme }) => {
  const [selected, setSelected] = useState(filter);
  const [skills] = useState(GetSkills());

  const activeFilter = skills.find(value => value.id === filter);

  // TODO: this doesn't work with clicking skills in projects
  if (selected !== filter) {
    return <Redirect to={`/portfolio/${selected}`} />;
  }

  return (
    <Select
      placeholder="Filter by skill..."
      styles={customStyles(theme)}
      value={
        filter ? { value: activeFilter.id, label: activeFilter.name } : null
      }
      isClearable="True"
      onChange={(item, action) => {
        if (action.action === 'select-option') {
          setSelected(item.value);
        }
        if (action.action === 'clear') {
          setSelected('');
        }
      }}
      options={skills.map(skill => ({
        value: skill.id,
        label: skill.name,
      }))}
    />
  );
};

export default withTheme(Filter);
