import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
  flex-grow: 1;
`;

const Dropdown = ({
  value,
  values,
}) => {
  return (
    <select value={value}>
      <option value="default" disabled>Select user</option>
      <option value="">power</option>
      <option value="">temp</option>
    </select>
  );
};

const Body = ({
  users,
}) => {
  return (
    <StyledBody>
      <Dropdown
        value={'default'}
        values={users}
      />
    </StyledBody>
  );
};

export default Body;
