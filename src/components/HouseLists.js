import React from 'react';
import styled from 'styled-components';
import { data } from '../assets/mockData';
import HouseCard from './HouseCard';

const HouseLists = ({ houses }) => {
  return (
    <StyledHouseLists>
      <h2>G.O.T's House</h2>
      {data.map((houseData) => (
        <HouseCard houseData={houseData} />
      ))}
    </StyledHouseLists>
  );
};

export default HouseLists;

export const StyledHouseLists = styled.div`
  /* width: 100%; */
`;
