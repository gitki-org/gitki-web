import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import Body from '@@components/Body';

const BodyContainer = ({

}) => {
  const [ users, setUsers ] = React.useState([]);

  const handleClickButton = useMemo(
    () => {
      return () => {
        setUsers([1]);
      };
    },
    [users],
  );

  return (
    <Body
      users={users}
    />
  );
};

export default BodyContainer;
