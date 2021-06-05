import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { data } from '../assets/mockData';
import HouseCard from './HouseCard';
import axios from 'axios';
// import instance from '../assets/axios';

const HouseLists = ({ setShowModal, setContextModal, toggleModal }) => {
  const [testData, setTestData] = useState(null);

  const removeWordFromSentence = (word, sentence) => {
    return sentence.replace(word, '').trim();
  };

  const randomNumIndexRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const one = 'https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50';
  const two = 'https://www.anapioficeandfire.com/api/houses?page=2&pageSize=50';
  const three =
    'https://www.anapioficeandfire.com/api/houses?page=3&pageSize=50';
  const four =
    'https://www.anapioficeandfire.com/api/houses?page=4&pageSize=50';
  const five =
    'https://www.anapioficeandfire.com/api/houses?page=5&pageSize=50';
  const six = 'https://www.anapioficeandfire.com/api/houses?page=6&pageSize=50';
  const seven =
    'https://www.anapioficeandfire.com/api/houses?page=7&pageSize=50';
  const eight =
    'https://www.anapioficeandfire.com/api/houses?page=8&pageSize=50';
  const nine =
    'https://www.anapioficeandfire.com/api/houses?page=9&pageSize=50';

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);
  const requestFour = axios.get(four);
  const requestFive = axios.get(five);
  const requestSix = axios.get(six);
  const requestSeven = axios.get(seven);
  const requestEight = axios.get(eight);
  const requestNine = axios.get(nine);

  useEffect(() => {
    axios
      .all([
        requestOne,
        requestTwo,
        requestThree,
        requestFour,
        requestFive,
        requestSix,
        requestSeven,
        requestEight,
        requestNine,
      ])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];
          const responseFour = responses[3];
          const responseFive = responses[4];
          const responesSix = responses[5];
          const responseSeven = responses[6];
          const responseEight = responses[7];
          const responesNine = responses[8];

          const allResponse = [
            ...responseOne.data,
            ...responseTwo.data,
            ...responesThree.data,
            ...responseFour.data,
            ...responseFive.data,
            ...responesSix.data,
            ...responseSeven.data,
            ...responseEight.data,
            ...responesNine.data,
          ];

          const images = [
            'arryn',
            'baratheon',
            'greyjoy',
            'lannister',
            'martell',
            'stark',
            'targaryen',
            'tully',
            'tyrell',
            'last',
          ];

          const editedResponse = allResponse.map((house) => {
            return {
              ...house,
              name: removeWordFromSentence('House', house.name),
              imageHouse: images[randomNumIndexRange(0, 9)],
            };
          });
          setTestData(editedResponse);
        })
      )
      .catch((errors) => {
        console.error('Request errors ==> ', errors);
      });
  }, []);

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
