import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/Layout';

class Settings extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <Layout title="Settings">
        <div className="container paper-card">
          <h1>Level</h1>
          lorem ipsum
          <h1>Number Range</h1>
          lorem ipsum
        </div>
      </Layout>
    );
  }
}

export default Settings;
