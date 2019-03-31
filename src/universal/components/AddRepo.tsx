import React, { useState, useMemo } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledAddRepo = styled.div`
  padding: 3px 6px;

  > * {
    background-color: #efefef;
    border-radius: 3px;
    padding: 6px 4px;
    width: 100%;
  }

  input {
    background-color: #efefef;
    height: 30px;
    margin-bottom: 10px;
  }

  textarea {
    border: none;
    height: 180px;
    resize: none;
  }
`;

const AddRepo = () => {
  return (
    <StyledAddRepo>
      <input 
        placeholder="Title"
        type="text" 
      />
      <textarea
        placeholder="Content"
        resize="none"
      />
    </StyledAddRepo>
  );
};

export default AddRepo;
