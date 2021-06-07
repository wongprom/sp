import React from 'react';
import styled from 'styled-components';
import sigilAlgood from '../assets/images/250px-House_Algood-sigil.webp';
import { getImageByKey } from '../assets/mockData';

const HouseCard = ({ houseData, setContextModal, toggleModal }, props) => {
  const { name, imageHouse, ...rest } = houseData;

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
        <div className="sigilWrapper">
          <img src={sigilAlgood} alt="" />
        </div>
        <div className="textBox">
          <h3>{name}</h3>
        </div>
      </div>
    </StyledHouseCardWrapper>
  );
};

export default HouseCard;

export const StyledHouseCardWrapper = styled.div`
  margin: 20px 10px;
  border: 1px solid red;
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
      color: #aaa9ad;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
      }
    }
  }
`;
