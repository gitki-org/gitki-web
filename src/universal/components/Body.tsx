import React, { useState, useMemo } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import RepoListContainer from '@@components/RepoListContainer';

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
      <Switch>
        <Route path="/add" component={() => 44} />
        <Route component={RepoListContainer} />
      </Switch>
    </StyledBody>
  );
};

export default Body;
