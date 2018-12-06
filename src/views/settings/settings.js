import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import { OPERATORS } from '../../core/questions';

class Settings extends Component {
  constructor(props) {
    super(props);
    const { settings } = props;
    const { level, operators, questionsPerQuiz } = settings;

    const operatorSettings = Object.keys(OPERATORS).map(operatorKey => ({
      key: operatorKey,
      description: OPERATORS[operatorKey],
      selected: operators.includes(operatorKey),
    }));

    console.log('Operator Settings', operatorSettings);

    this.state = {
      level,
      operators,
      questionsPerQuiz,
    };
  }

  render() {
    const { level, operators, questionsPerQuiz } = this.state;
    return (
      <Layout title="Settings">
        <div className="container paper-card">
          <h1>Level</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Level
              <input type="number" className="form-control" id="levelSettings" aria-describedby="levelSettings" placeholder="Level" value={level} />
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
          {JSON.stringify(operators, null, 2)}
          <h1>Questions per quiz</h1>
          <select className="form-control" defaultValue={questionsPerQuiz}>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </div>
      </Layout>
    );
  }
}

Settings.defaultProps = {
  settings: {
    level: 1,
    operators: ['+', '-', '/', 'x'],
    questionsPerQuiz: 20,
  },
};

Settings.propTypes = {
  settings: PropTypes.shape({
    level: PropTypes.number,
    operators: PropTypes.array,
    questionsPerQuiz: PropTypes.number,
  }),
};

export default Settings;
