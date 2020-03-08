import React, { useState } from "react";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import { withTheme } from "styled-components";

import projectData from "../../../../static/data/projects.json";

const customStyles = theme => ({
  menu: (provided, state) => ({
    ...provided,
    maxWidth: 400,
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    color: state.isSelected || state.isFocused ? "white" : theme.colors.primary,
    backgroundColor:
      state.isSelected || state.isFocused ? theme.colors.primary : "white",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "white",
  }),
  clearIndicator: (provided, state) => {
    return {
      ...provided,
      color: theme.colors.alert,
    };
  },
  indicatorSeparator: (provided, state) => {
    return {
      ...provided,
      backgroundColor: "white",
    };
  },
  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      color: "white",
    };
  },
  control: provided => ({
    ...provided,
    maxWidth: 400,
    backgroundColor: theme.colors.primary,
    borderRadius: 0,
    border: 0,
    color: "white",
    boxShadow: `4px 4px 0px 0px ${theme.colors.secondary}`,
    cursor: "pointer",
  }),
  input: (provided, state) => ({
    ...provided,
    color: "white",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
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

const Filter = ({ filter = "", theme, history }) => {
  const [skills] = useState(GetSkills());

  const activeFilter = skills.find(value => value.id === filter);

  const reRoute = newRoute => {
    history.push(`/portfolio/${newRoute}`);
  };

  return (
    <Select
      placeholder="Filter by skill..."
      styles={customStyles(theme)}
      value={
        activeFilter
          ? { value: activeFilter.id, label: activeFilter.name }
          : null
      }
      isClearable="True"
      onChange={(item, action) => {
        if (action.action === "select-option") {
          reRoute(item.value);
        }
        if (action.action === "clear") {
          reRoute("");
        }
      }}
      options={skills.map(skill => ({
        value: skill.id,
        label: skill.name,
      }))}
    />
  );
};

export default withRouter(withTheme(Filter));
