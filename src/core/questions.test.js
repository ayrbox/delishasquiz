const questions = require('./questions');

const { OPERATORS } = questions;

describe('core question', () => {
  describe('#getRandomInt', () => {
    const runRandomNumberTest = (maxNumber) => {
      it(`returns betwen 0 and ${maxNumber}`, async () => {
        const r = questions.getRandomInt(maxNumber);
        expect(r).toBeLessThanOrEqual(maxNumber);
        expect(r).toBeGreaterThanOrEqual(0);
      });
    };

    [1, 3, 5, 6, 6, 7, 345, 4, 234, 46, 4, 74, 47].forEach((n) => {
      runRandomNumberTest(n);
    });
  });

  describe('#get Randrom Operator', () => {
    it('returns one of operator', () => {
      const operatorArray = Object.keys(OPERATORS).map(k => OPERATORS[k]);
      const randomOperator = questions.getRandomOperator();
      expect(operatorArray).toContain(randomOperator);
    });
  });

  // describe('#get question', () => {
  //   it('returns question object', () => {
  //     const newQuestion = questions.getQuestion();
  //     console.log(newQuestion);
  //   });
  // });
});
