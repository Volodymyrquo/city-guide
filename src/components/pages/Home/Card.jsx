import React from 'react';

const Card = ({ img, headerTitle, headerSubTitle }) => {
  return (
    <div className='col-10 col-lg-4 mx-auto mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={img} alt={headerTitle} className='card-img- top' />
        <div className='card-body'>
          <h3 className='card-title text-uppercase'>{headerTitle}</h3>
          <h5 className='card-title'>{headerSubTitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
