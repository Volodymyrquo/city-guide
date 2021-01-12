import React from 'react';
import { InfoConsumer } from '../../context';

const Details = () => {
  return (
    <InfoConsumer>
      {(data) => {
        const {
          id,
          headerTitle,
          headerSubTitle,
          headerText,
          title,
          description,
          img,
          maps,
        } = data.detailInfo;
        return (
          <>
            <div className='container-fluid align-items-center'>
              <h1 className='display-1 font-weight-bold'>{headerTitle}</h1>
              <h4 className='display-5'>{headerSubTitle}</h4>
              <p>{headerText}</p>
            </div>
          </>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
