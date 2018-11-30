import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';


const Result = ({ result }) => (
  <Layout title="Result">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8">
          <div className="paper-card">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong className="result-item-container">Problem</strong>
                <strong className="result-item-container">Answer</strong>
                <strong className="result-item-container">Your Answer</strong>
              </li>
              {result.map(answer => (
                <li key={`${answer.digit1}${answer.operator}${answer.digit2}`} className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="result-item-container">
                    {answer.digit1}
                    {` ${answer.operator} `}
                    {answer.digit2}
                  </span>
                  <span className="result-item-container">
                    {answer.correctAnswer}
                  </span>
                  <span className={classNames({
                    'result-item-container': true,
                    'text-success': answer.correct,
                    'text-danger': !answer.correct,
                  })}
                  >
                    {answer.answer}
                    {answer.correct ? <span> &#10003;</span> : <span> &times;</span> }
                  </span>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-end pt-3">
              <Link to="/game" className="btn btn-outline-primary">
                Start again
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

Result.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      digit1: PropTypes.number.isRequired,
      digit2: PropTypes.number.isRequired,
      operator: PropTypes.oneOf(['+', '-', '/', 'x']),
      correctAnswer: PropTypes.number.isRequired,
      answer: PropTypes.number.isRequired,
      correct: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};


export default Result;
