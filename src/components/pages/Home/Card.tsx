import React from 'react';
import { Link } from 'react-router-dom';
import { DetailInfoType } from "../../../context/reducer";
type HandleDetailType = {handleDetail:(arg:number)=>void};
type PropsType = DetailInfoType & HandleDetailType;

const Card = ({
  id,
  img,
  headerTitle,
  headerSubTitle,
  headerText,
  handleDetail,
}:PropsType) => {
  return (
    <div className='col-10 col-lg-4 mx-auto mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={img} alt={headerTitle} className='card-img-top' />
        <div className='card-body'>
          <h3 className='card-title text-uppercase'>{headerTitle}</h3>
          <h5 className='card-title'>{headerSubTitle}</h5>
          <p className='card-text'>{headerText}</p>
          <Link
            onClick={() => handleDetail(id)}
            to='details'
            className='btn btn-outline-primary text-uppercase'>
            more info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
