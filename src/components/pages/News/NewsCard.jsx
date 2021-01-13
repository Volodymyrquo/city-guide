import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ id, newsTitle, newsText }) => {
  return (
    <div>
      <div className='card container mt-2 mb-3 p-5'>
        <div className='card-body'>
          <h5 key={id} className='card-title'>
            {newsTitle}
          </h5>
          <p className='card-text'>{newsText}</p>
          <Link to='/' className='card-link'>
            Read more{'>>'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
