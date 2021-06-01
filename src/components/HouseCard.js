import React from 'react';
import styled from 'styled-components';
import houseLogoMartel from '../assets/images/house-logo-martel.jpeg';
import sigilAlgood from '../assets/images/250px-House_Algood-sigil.webp';

const HouseCard = ({ houseData }) => {
  return (
    <StyledHouseCardWrapper>
      <div className="imageWrapper">
        <img src={houseLogoMartel} alt="test" />
      </div>

      <div className="infoBox">
        <div className="sigilWrapper">
          <img src={sigilAlgood} alt="" />
        </div>
        <div className="textBox">
          <h3>{houseData.name}</h3>
        </div>
      </div>
    </StyledHouseCardWrapper>
  );
};

export default HouseCard;

export const StyledHouseCardWrapper = styled.div`
  /* width: 100%; */
  margin: 20px 10px;
  border: 1px solid red;
  .imageWrapper {
    /* width: 100%;
    height: 100%; */
    /* margin: 20px 20px; */

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
