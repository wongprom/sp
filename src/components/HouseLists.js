import React from 'react';
import styled from 'styled-components';
import HouseCard from './HouseCard';

const HouseLists = ({ setShowModal, setContextModal, toggleModal, houses }) => {
  return (
    <StyledHouseLists>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1800px;

  /* width: 100%; */
`;
