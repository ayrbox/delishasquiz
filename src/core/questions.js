/**
 * @module mathsquiz/core
 */


/**
 * @constant maths/quiz/OPERATORS
 */
export const OPERATORS = {
  ADDITION: '+',
  SUBSTRACTION: '-',
  DIVISION: '/',
  MULTIPLICATION: 'x',
};

/**
 * @func mathsquiz/core/isValidOperator
 * @desc validates if operator is validate */
export const isValidOperator = (operator) => {
  const operators = Object.keys(OPERATORS).map(k => OPERATORS[k]);
  return operators.includes(operator);
};

/**
 * @func mathsquiz/core/isValidQuestion
 * @desc validates if question is valid for quiz or not */
export const isValidQuestion = (question, digitUbound = 10) => {
  const { operator, digit1, digit2 } = question;

  if (digit1 > digitUbound || digit2 > digitUbound) {
    return false;
  }

  if (operator === OPERATORS.ADDITION) {
    return digit1 >= 0 && digit2 >= 0;
  }

  if (operator === OPERATORS.SUBSTRACTION) {
    return digit1 > digit2;
  }

  if (operator === OPERATORS.DIVISION) {
    return digit1 > 0 && digit2 > 0 && (digit1 % digit2 === 0);
  }

  if (operator === OPERATORS.MULTIPLICATION) {
    return digit1 >= 0 && digit2 >= 0;
  }

  return false;
};


/**
 * @func mathsquiz/core/add
 */
export const add = digits => digits.reduce((a, d) => {
  if (typeof d !== 'number') throw new Error('Required to be array of numbers');
  return (a + d);
}, 0);

/**
 * @func mathsquiz/core/substract
 */
export const substract = digits => digits.slice(1)
  .reduce((a, d) => a - d, digits.slice(0, 1));

/**
 * @func mathsquiz/core/divide
 */
export const divide = digits => digits.slice(1)
  .reduce((a, d) => a / d, digits.slice(0, 1));

/**
 * @func mathsquiz/core/multiply
 */
export const multiply = digits => digits.slice(1)
  .reduce((a, d) => a * d, digits.slice(0, 1));

/**
 * @func mathsquiz/core/getRandomInt
 */
export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

/**
 * @func mathsquiz/core/getRandomOperator
 */
export const getRandomOperator = (operators) => {
  if (!Array.isArray(operators)) throw new Error('Expected operators to be an array');
  const optIndex = getRandomInt(operators.length);
  return operators[optIndex];
};

/**
 * @func mathsquiz/core/getQuestion
 * @desc returns question object with random number and operator
 */
export const getQuestion = (operators, ubound) => {
  if (!Array.isArray(operators)) throw new Error('Expected operators to be an array');

  const invalidOperator = operators.find(o => !isValidOperator(o));
  if (invalidOperator) {
    throw new Error(`Invalid operator ${invalidOperator}`);
  }

  const operator = getRandomOperator(operators);
  const q = {
    digit1: 0,
    digit2: 0,
    operator,
  };

  do {
    q.digit1 = getRandomInt(20);
    q.digit2 = getRandomInt(20);
  }
  while (!isValidQuestion(q, ubound));
  return q;
};

/**
 * @func mathsquiz/core/getAnswer
 *
 * @param operator object
 * @param digits array[Number]
 *
 * @desc takes operator and digits as array and computes answer
 * @return Number
 */
export const getAnswer = ({ operator, ...digits }) => {
  const arr = Object.keys(digits).map(key => digits[key]);
  /* eslint-disable no-nested-ternary */
  return ((operator === OPERATORS.ADDITION) ? add(arr)
    : (operator === OPERATORS.SUBSTRACTION) ? substract(arr)
      : (operator === OPERATORS.DIVISION) ? divide(arr)
        : (operator === OPERATORS.MULTIPLICATION) ? multiply(arr) : 0);
};

/**
 * @func mathsquiz/core/getQuestions
 *
 * @desc returns array of question objects
 */
export const getQuestions = (level, operators, numberOfQuestions) => {
  const ubound = level * 10;
  return [...Array(numberOfQuestions)].map(() => getQuestion(operators, ubound));
};
