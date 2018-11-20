import React from 'react';
import PropTypes from 'prop-types';


const QuestionCount = ({ counter, total }) => (
  <div className="question-count">
    {`Question ${counter} of ${total}`}
  </div>
);


QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
