import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { data } from '../assets/mockData';
import HouseCard from './HouseCard';
import axios from 'axios';
// import instance from '../assets/axios';

const HouseLists = ({ setShowModal, setContextModal, toggleModal }) => {
  const [testData, setTestData] = useState(null);
  // const axios = instance();
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
          console.log(
            '🚀 ~ file: HouseLists.js ~ line 52 ~ axios.spread ~ responses',
            responses
          );

          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];
          const responseFour = responses[3];
          const responseFive = responses[4];
          const responesSix = responses[5];
          const responseSeven = responses[6];
          const responseEight = responses[7];
          const responesNine = responses[8];

          console.log(
            '🚀 ~ file: HouseLists.js ~ line 53 ~ axios.spread ~ responseOne.data',
            responseOne.data
          );
          const temp = [
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
          console.log(
            '🚀 ~ file: HouseLists.js ~ line 72 ~ axios.spread ~ temp',
            temp
          );
          setTestData(temp);
          // use/access the results
        })
      )
      .catch((errors) => {
        console.log('errors ==> ', errors);
        // react on errors.
      });

    // instance
    //   .get('/houses?page=9&pageSize=50')
    //   .then(function (response) {
    //     // handle success
    //     console.log('response. ==> ', response);
    //     setTestData(response.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }, []);

  const removeWordFromSentence = (word, sentence) => {
    return sentence.replace(word, '').trim();
  };

  useEffect(() => {
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
    const tempdata = data?.map((item, index) => {
      return {
        ...item,
        name: removeWordFromSentence('House', item.name),
        imageHouse: images[index],
      };
    });
    setTestData(tempdata);
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
