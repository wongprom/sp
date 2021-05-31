import React from 'react';

import styled from 'styled-components';

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <form>
        <label>
          Search House
          <input type="text" />
        </label>
      </form>
    </StyledSearchInput>
  );
};

export default SearchInput;

export const StyledSearchInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  form {
    width: 300px;
    label {
      color: white;

      input {
        margin-top: 20px;
        font-size: 24px;
        height: 30px;
        border: 1px solid white;
        background-color: transparent;
        width: 100%;
      }
    }
  }
`;
