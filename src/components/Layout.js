import React from 'react';
import PropTypes from 'prop-types';
import bg from '../assets/images/bg.jpg';

const Layout = ({ title, children }) => (
  <main className="app-layout">
    <header
      className="app-header"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="app-title">{title}</h1>
    </header>
    {children}
  </main>
);

Layout.defaultProps = {
  title: 'Maths Quiz',
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};


export default Layout;
