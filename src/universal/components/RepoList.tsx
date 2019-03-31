import axios from 'axios';
import React, { useState, useMemo } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledRepoList = styled.div`
`;

const Repo: React.FC = ({
  repo,
}) => {
  console.log(123, repo);
  return (
    <div>
      <p>{repo.orgName}</p>
      <p>{repo.repoName}</p>
    </div>
  );
};

const RepoList = ({
  repos,
}) => {
  const _repos = repos.map((repo, idx) => {
    return (
      <Repo 
        key={idx}
        repo={repo}
      />
    );
  });

  return (
    <StyledRepoList>
      {_repos}
    </StyledRepoList>
  );
};

export default RepoList;