export const OPERATORS = {
  ADDITION: '+',
  SUBSTRACTION: '-',
  DIVISION: '/',
  MULTIPLICATION: 'x',
};

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

export const getQuestions = numberOfQuestions => [...Array(numberOfQuestions)].map(getQuestion);
