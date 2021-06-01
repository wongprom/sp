import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { data } from '../assets/mockData';
import HouseCard from './HouseCard';

const HouseLists = () => {
  const [testData, setTestData] = useState(null);

  const removeWordFromSentence = (word, sentence) => {
    return sentence.replace(word, '').trim();
  };

  useEffect(() => {
    const tempdata = data?.map((item) => {
      return { ...item, name: removeWordFromSentence('House', item.name) };
    });
    setTestData(tempdata);
  }, []);

  return (
    <StyledHouseLists>
      <h2>G.O.T's House</h2>
      {testData?.map((houseData) => (
        <HouseCard key={houseData.name} houseData={houseData} />
      ))}
    </StyledHouseLists>
  );
};

export default HouseLists;

export const StyledHouseLists = styled.div`
  /* width: 100%; */
`;
