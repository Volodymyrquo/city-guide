import React from 'react';
import { InfoConsumer } from '../../../context';
//import Card from './Card';
import Info from './Info';

const Home = () => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <InfoConsumer>
          {(value) =>
            value.placeInfo.map((item) => <Info key={item.id} item={item} />)
          }
        </InfoConsumer>
      </div>
    </div>
  );
};

export default Home;
