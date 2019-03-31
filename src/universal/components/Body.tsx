import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
  flex-grow: 1;
`;

const Dropdown = ({
  handleChangeDropdown,
  user,
  users,
}) => {
  const _users = users && users.map((user) => {
    return (
      <option 
        key={user.username}
        value={user.username}
      >
        {user.username}
      </option>
    );
  });
  
  return (
    <select 
      onChange={handleChangeDropdown}
      value={user}
    >
      <option value="default" disabled>Select user</option>
      {_users}
    </select>
  );
};

const Body = ({
  handleChangeDropdown,
  user = 'default',
  users,
}) => {
  return (
    <StyledBody>
      <Dropdown
        handleChangeDropdown={handleChangeDropdown}
        user={user}
        users={users}
      />
    </StyledBody>
  );
};

export default Body;
