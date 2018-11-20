import React from 'react';
import PropTypes from 'prop-types';


const Question = ({ question }) => {
  const { digit1, digit2, operator } = question;
  return (
    <div className="question">
      {`Solve ${digit1} ${operator} ${digit2}`}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    digit1: PropTypes.number.isRequired,
    digit2: PropTypes.number.isRequired,
    operator: PropTypes.string.isRequired,
  }).isRequired,
};

export default Question;
