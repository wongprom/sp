import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { data } from '../assets/mockData';
import HouseCard from './HouseCard';

const HouseLists = ({ setShowModal, setContextModal, toggleModal }) => {
  const [testData, setTestData] = useState(null);

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
          key={houseData.name}
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
