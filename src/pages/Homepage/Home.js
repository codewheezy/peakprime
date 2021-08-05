import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../Data';
import { InfoSection, Feature } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Feature />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;