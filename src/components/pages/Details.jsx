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
              {/* social icons */}
              <div className='container mt-5'>
                <div className='row justify-content-center'>
                  <div className='col-2'>
                    <i class='fab fa-facebook-f' />
                  </div>
                  <div className='col-2'>
                    <i class='fab fa-twitter' />
                  </div>
                  <div className='col-2'>
                    <i class='fab fa-google-plus-g' />
                  </div>
                  <div className='col-2'>
                    <i class='fab fa-reddit' />
                  </div>
                  <div className='col-2'>
                    <i class='fab fa-whatsapp' />
                  </div>
                  <div className='col-2'>
                    <i class='fab fa-facebook-messenger' />
                  </div>
                </div>
              </div>
            </div>
            {/* Nav Links */}
            <div className='container'>
              <ul className='nav nav-tabs' role='tablist'>
                {/* About Place Link */}
                <li className='nav-item'>
                  <a
                    href='#aboutPlace'
                    className='nav-link active'
                    role='tab'
                    data-bs-toggle='tab'>
                    About Place
                  </a>
                </li>
                {/* Reviews Link */}
                <li className='nav-item'>
                  <a
                    href='#reviews'
                    className='nav-link'
                    role='tab'
                    data-bs-toggle='tab'>
                    Reviews
                  </a>
                </li>
                {/* Map Link */}
                <li className='nav-item'>
                  <a
                    href='#map'
                    className='nav-link '
                    role='tab'
                    data-bs-toggle='tab'>
                    Map
                  </a>
                </li>
              </ul>
              {/* Tab pane */}
              <div className='tab-content mb-5'>
                {/* About Place tab */}
                <div
                  id='aboutPlace'
                  className='tab-pane in active text-center mt-5'
                  role='tabpanel'>
                  <h2 className='mb-3'>{title}</h2>
                  <p>{description}</p>
                  <img
                    src={img}
                    alt={title}
                    className='img-thumbnail img-fluid'
                  />
                </div>
                {/* Reviews tab */}
                <div id='reviews' className='tab-pane' role='tabpanel'>
                  Reviews content
                </div>
                {/* Map tab */}
                <div id='map' className='tab-pane' role='tabpanel'>
                  <iframe
                    src={maps}
                    style={{
                      border: '0',
                      height: '28.125rem',
                      width: '100%',
                      frameborder: '0',
                    }}
                    title='map'></iframe>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
