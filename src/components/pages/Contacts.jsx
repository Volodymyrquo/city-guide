import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <section className='my-5 py-5'>
      <div className='container'>
        <div className='well well-sm'>
          <h3>
            <strong>Our location</strong>
          </h3>
        </div>

        <div className='row'>
          <div className='col-md-7'>
            <iframe
              src='https://www.google.com/maps/d/u/0/embed?mid=1sr9HCabDm2iKgt2tEEBk3GfYjQqczKaY'
              title='map'
              style={{
                border: '0',
                width: '100%',
                height: '315px',
                frameborder: '0',
              }}
              allowFullScreen></iframe>
          </div>
          <div className='col-md-5'>
            <h4>
              <strong>Contact Us</strong>
            </h4>
            <form action=''>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                />
              </div>
              <div className='form-group'>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Phone'
                />
              </div>
              <textarea
                className='form-control'
                cols='30'
                rows='3'
                placeholder='Message'
              />
              <Link className='btn btn-outline-primary text-uppercase mt-1'>
                <i className='fa fa-paper-plane-o' aria-hidden='true' />
                <i className='fab fa-telegram-plane' />
                &nbsp; send
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
