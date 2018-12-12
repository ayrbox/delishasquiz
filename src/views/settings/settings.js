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

    this.state = {
      level,
      operatorSettings,
      questionsPerQuiz,
    };
    this.handleCheckOperator = this.handleCheckOperator.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleQuestionsPerQuiz = this.handleQuestionsPerQuiz.bind(this);
    this.handleSaveSettings = this.handleSaveSettings.bind(this);
  }

  handleCheckOperator(e) {
    const { name: key, checked: selected } = e.target;
    this.setState(prev => ({
      operatorSettings: prev.operatorSettings.map(operator => ({
        ...operator,
        selected: ((operator.key === key) ? selected : operator.selected),
      })),
    }));
  }

  handleLevelChange(e) {
    const { value } = e.target;
    this.setState({
      level: value,
    });
  }

  handleQuestionsPerQuiz(e) {
    const { value } = e.target;
    this.setState({ questionsPerQuiz: value });
  }

  handleSaveSettings(e) {
    e.preventDefault();
    // todo Validate settings
    const { saveSettings } = this.props;
    saveSettings(this.state);
  }

  render() {
    const { level, operatorSettings, questionsPerQuiz } = this.state;
    return (
      <Layout title="Settings">
        <div className="container paper-card">
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
          <h4 className="mb-3">Difficulty</h4>
          <div className="mb-3">
            <label htmlFor="levelSettings">
              Level:
              <input
                type="text"
                className="form-control mt-3"
                id="levelSettings"
                placeholder="e.g. 1"
                value={level}
                onChange={this.handleLevelChange}
              />
            </label>
            <small id="levelHelp" className="form-text text-muted">Maxium number of answer you will provide will be level times 10 (i.e 4 x 10 will be max answer for level 4)</small>
          </div>
          <p>Operators: </p>
          <div className="mb-3">
            {operatorSettings.map(o => (
              <div className="form-check" key={o.key}>
                <label className="form-check-label" htmlFor={`operator_${o.key}`}>
                  <input
                    name={o.key}
                    className="form-check-input"
                    type="checkbox"
                    checked={o.selected}
                    id={`operator_${o.key}`}
                    onChange={this.handleCheckOperator}
                  />
                  {`${o.key}(${o.description})`}
                </label>
              </div>
            ))}
          </div>
          <hr className="mb-4" />
          <h4 className="mb-3">Others</h4>
          <div className="mb-3">
            <label htmlFor="questionNumbers">
              Questions per quiz:
              <input hidden />
            </label>
            <select
              id="questionNumbers"
              className="form-control"
              value={questionsPerQuiz}
              onChange={this.handleQuestionsPerQuiz}
            >
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </select>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-outline-primary mr-1" onClick={this.handleSaveSettings}>Save</button>
            <button type="button" className="btn btn-outline-secondary">Cancel</button>
          </div>
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
  saveSettings: PropTypes.func.isRequired,
};

export default Settings;
