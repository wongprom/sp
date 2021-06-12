import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { getImageByKey } from '../assets/mockData';
import { HouseType } from '../types';

type PropsType = {
  houseData: HouseType;
  setContextModal: Dispatch<SetStateAction<HouseType | null>>;
  toggleModal: () => void;
};

const HouseCard: React.FC<PropsType> = (
  { houseData, setContextModal, toggleModal },
  props
) => {
  const { name, imageHouse } = houseData;

  return (
    <StyledHouseCardWrapper>
      <div
        className="imageWrapper"
        onClick={() => {
          toggleModal();
          setContextModal(houseData);
        }}
      >
        <img src={getImageByKey(imageHouse)} alt={name} />
      </div>
      <div className="infoBox">
        <div className="textBox">
          <h3>{name}</h3>
        </div>
      </div>
    </StyledHouseCardWrapper>
  );
};

export default HouseCard;

export const StyledHouseCardWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@1,100;1,300&family=Cardo:ital@0;1&family=Cinzel+Decorative:wght@400;700&family=MedievalSharp&display=swap');

  max-width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  .imageWrapper {
    &:hover {
      cursor: pointer;
    }
    img {
      height: 100%;
      width: 100%;

      object-fit: cover;
    }
  }

  .infoBox {
    position: relative;
    .sigilWrapper {
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 43px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .textBox {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        all: initial;
        color: #d5d5d7;
        font-size: 24px;
        font-family: 'MedievalSharp', cursive;
        letter-spacing: 1.2px;
      }
    }
  }
`;
