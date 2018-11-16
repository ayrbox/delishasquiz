export const OPERATORS = {
  ADDITION: 'ADDITION',
  SUBSTRACTION: 'SUBSTRACTION',
  DIVISION: 'DIVISION',
  MULTIPLICATION: 'MULTIPLICATION',
};

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const getRandomOperator = () => {
  const optIndex = getRandomInt(4);

  const operatorArray = Object.keys(OPERATORS).map(k => OPERATORS[k]);
  const opt = operatorArray[optIndex];
  return opt;
};

export const getQuestion = () => ({
  digitOne: getRandomInt(20),
  digitTwo: getRandomInt(20),
  operator: getRandomOperator(),
});

export const getQuestions = numberOfQuestions => [...Array(numberOfQuestions)].map(getQuestion);
