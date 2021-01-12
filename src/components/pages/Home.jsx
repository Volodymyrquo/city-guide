import React from 'react';
import { InfoConsumer } from '../../context';

const Home = () => {
  return <InfoConsumer>{(data) => <h2>{data.info}</h2>}</InfoConsumer>;
};

export default Home;
