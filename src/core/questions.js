export const OPERATORS = {
  ADDITION: "ADDITION",
  SUBSTRATION: "SUBSTRACTION",
  DIVISION: "DIVISION",
  MULTIPLICATION: "MULTIPLICATION"
};

export const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getRandomOperator = () => {
  const optIndex = getRandomInt(4);

  const opt = Object.keys(OPERATORS)[optIndex];
  console.log(opt);
  return opt;
};

export const createQuestion = () => {
return {
    digitOne: getRandomInt(20),
    digitTwo: getRandomInt(20),
    operator: getRandomOperator()
  };
};
