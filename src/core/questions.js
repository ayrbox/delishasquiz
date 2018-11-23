export const OPERATORS = {
  ADDITION: '+',
  SUBSTRACTION: '-',
  DIVISION: '/',
  MULTIPLICATION: 'x',
};


export const add = digits => digits.reduce((a, d) => (a + d), 0);

export const substract = digits => digits.slice(1)
  .reduce((a, d) => a - d, digits.slice(0, 1));

export const divide = digits => digits.slice(1)
  .reduce((a, d) => a / d, digits.slice(0, 1));

export const multiply = digits => digits.slice(1)
  .reduce((a, d) => a * d, digits.slice(0, 1));

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const getRandomOperator = () => {
  const optIndex = getRandomInt(4);

  const operatorArray = Object.keys(OPERATORS).map(k => OPERATORS[k]);
  const opt = operatorArray[optIndex];
  return opt;
};

export const getQuestion = () => ({
  digit1: getRandomInt(20),
  digit2: getRandomInt(20),
  operator: getRandomOperator(),
});

export const getAnswer = ({ operator, ...digits }) => {
  const arr = Object.keys(digits).map(key => digits[key]);
  /* eslint-disable no-nested-ternary */
  return ((operator === OPERATORS.ADDITION) ? add(arr)
    : (operator === OPERATORS.SUBSTRACTION) ? substract(arr)
      : (operator === OPERATORS.DIVISION) ? divide(arr)
        : (operator === OPERATORS.MULTIPLICATION) ? multiply(arr) : 0);
};

export const getQuestions = numberOfQuestions => [...Array(numberOfQuestions)].map(getQuestion);
