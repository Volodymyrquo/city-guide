import React from 'react';
import { InfoConsumer } from '../../../context';
import Card from './Card';
//import Info from './Info';

const Home = () => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <InfoConsumer>
          {(value) =>
            value.placeInfo.map((item) => <Card key={item.id} {...item} />)
          }
        </InfoConsumer>
      </div>
    </div>
  );
};

export default Home;
