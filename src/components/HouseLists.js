import React from 'react';
import styled from 'styled-components';
import HouseCard from './HouseCard';

const HouseLists = ({ setShowModal, setContextModal, toggleModal, houses }) => {
  return (
    <StyledHouseLists>
      <h2>G.O.T's House</h2>
      {houses?.map((houseData) => (
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
