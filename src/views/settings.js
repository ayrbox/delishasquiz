import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import { OPERATORS } from '../core/questions';

class Settings extends Component {
  componentDidMount() {
    console.log('Should call get settings'); // eslint-disable-line
  }

  render() {
    return (
      <Layout title="Settings">
        <div className="container paper-card">
          <h1>Level</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Level
              <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
            </label>
          </div>
          <h1>Operators</h1>
          {Object.keys(OPERATORS).map(key => (
            <div className="form-check">
              <label className="form-check-label" htmlFor={`operator_${key}`}>
                <input className="form-check-input" type="checkbox" value="" id={`operator_${key}`} />
                {`${key}(${OPERATORS[key]})`}
              </label>
            </div>
          ))}
          <h1>Questions per quiz</h1>
          <select className="form-control">
            <option>10</option>
            <option>22</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </div>
      </Layout>
    );
  }
}

export default Settings;
