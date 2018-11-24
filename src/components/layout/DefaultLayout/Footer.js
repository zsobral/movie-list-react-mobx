import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

import theMovieDbLogo from '../../../the-movie-db.svg';

const Footer = props => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        {/* <a href="">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a> */}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ marginLeft: 16 }}
            height="64"
            src={theMovieDbLogo}
            alt="the movie db logo"
          />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
