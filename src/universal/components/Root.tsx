import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import Body from '@@components/Body';

const StyledRoot = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 320px;
`;

const StyledHeader = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
`;

const BlackBar: React.FC = ({
  label,
}) => {
  return (
    <StyledHeader>
      {label}
    </StyledHeader>
  );
};

const Root = ({

}) => {
  return (
    <StyledRoot>
      <BlackBar label={'Gitki'} />
      <Body />
      <BlackBar label={'Elden presents'} />
    </StyledRoot>
  );
};

export default Root;
