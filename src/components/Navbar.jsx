import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='logo' style={{ width: '35px' }} />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>{' '}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className='nav-link active text-white text-uppercase ml-5'
                aria-current='page'
                href='#'>
                Home&nbsp;
                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white text-uppercase ml-5' href='#'>
                News
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white text-uppercase ml-5' href='#'>
                contact us
              </a>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-primary ml-2' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
