import React from 'react';

import styled from 'styled-components';

const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <StyledSearchInput>
      <form>
        <label>
          Search House
          <input
            type="text"
            value={searchValue}
            onChange={(event) => handleChange(event.target.value)}
          />
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
    color: hotpink;
    width: 300px;
    label {
      color: white;

      input {
        margin-top: 5px;
        font-size: 24px;
        height: 30px;
        border: 1px solid white;
        background-color: white;
        width: 100%;
      }
    }
  }
`;
