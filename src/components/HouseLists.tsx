import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import HouseCard from './HouseCard';
import { HouseType, FilteredHouses, AllHousesType } from '../types';

type PropsType = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setContextModal: Dispatch<SetStateAction<HouseType | null>>;
  toggleModal: () => void;
  houses: AllHousesType | FilteredHouses;
};

const HouseLists: React.FC<PropsType> = ({
  setShowModal,
  setContextModal,
  toggleModal,
  houses,
}) => {
  return (
    <StyledHouseLists>
      {houses?.map!((houseData) => (
        <HouseCard
          key={houseData.url}
          houseData={houseData}
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
  margin-top: 50px;
`;
