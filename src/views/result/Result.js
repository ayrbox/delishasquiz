import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Layout from '../../components/Layout';


const Result = ({ result }) => (
  <Layout title="Result">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8">
          <div className="paper-card">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Problem</strong>
                <strong>Answer</strong>
                <strong>Your Answer</strong>
              </li>
              {result.map(answer => (
                <li key={`${answer.digit1}${answer.operator}${answer.digit2}`} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                    {answer.digit1}
                    {` ${answer.operator} `}
                    {answer.digit2}
                  </span>
                  <span>
                    {answer.correctAnswer}
                  </span>
                  <span className={classNames({
                    'text-success': answer.correct,
                    'text-danger': !answer.correct,
                  })}
                  >
                    {answer.answer}
                  </span>
                </li>
              ))}
            </ul>
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
