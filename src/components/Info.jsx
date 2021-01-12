import React, { Component } from 'react';
import { InfoConsumer } from '../context';

export default class Info extends Component {
  render() {
    const {
      id,
      headerTitle,
      headerSubTitle,
      headerText,
      img,
    } = this.props.item;

    return (
      <InfoConsumer>
        {(data) => {
          <div className='col-10 col-lg-4 mx-auto mb-5'>
            <div className='card' style={{ width: '18rem' }}>
              <img src={img} alt={headerTitle} className='top' />
              <div className='card-body'>
                <h3 className='card-title text-uppercase'>{headerTitle}</h3>
                <h5 className='card-title'>{headerSubTitle}</h5>
              </div>
            </div>
          </div>;
        }}
      </InfoConsumer>
    );
  }
}
