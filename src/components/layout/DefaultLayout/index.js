import React from 'react';

import TopNav from './TopNav';
import Footer from './Footer';

const DefaultLayout = props => {
  const { children } = props;

  return (
    <div className="top-nav-layout">
      <TopNav />
      <div className="container content">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
