import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { data } from '../assets/mockData';
import HouseCard from './HouseCard';
import axios from 'axios';
// import instance from '../assets/axios';

const HouseLists = ({
  setShowModal,
  setContextModal,
  toggleModal,
  testData,
}) => {
  return (
    <StyledHouseLists>
      <h2>G.O.T's House</h2>
      {testData?.map((houseData) => (
        <HouseCard
          key={houseData.url}
          houseData={houseData}
          setShowModal={setShowModal}
          setContextModal={setContextModal}
          toggleModal={toggleModal}
        />
      ))}
    </StyledHouseLists>
  );
};

export default HouseLists;

export const StyledHouseLists = styled.div`
  /* width: 100%; */
`;
