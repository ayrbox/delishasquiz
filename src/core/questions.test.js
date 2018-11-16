const questions = require('./questions');

const { OPERATORS } = questions;

describe('core question', () => {
  describe('#getRandomInt', () => {
    it('returns random number between 0 and max number', () => {
      [1, 3, 5, 6, 6, 7, 345, 4, 234, 46, 4, 74, 47].forEach((n) => {
        const r = questions.getRandomInt(n);
        expect(r).toBeLessThanOrEqual(n);
        expect(r).toBeGreaterThanOrEqual(0);
      });
    });
  });

  describe('#get Randrom Operator', () => {
    it('returns one of operator', () => {
      const operatorArray = Object.keys(OPERATORS).map(k => OPERATORS[k]);
      const randomOperator = questions.getRandomOperator();
      expect(operatorArray).toContain(randomOperator);
    });
  });

  describe('#get question', () => {
    it('returns question object', () => {
      const newQuestion = questions.getQuestion();
      expect(newQuestion).toBeInstanceOf(Object);
    });
  });


  describe('#get questions', () => {
    it('returns array of questions', () => {
      const q = questions.getQuestions(100);
      expect(Array.isArray(q)).toBe(true);
      expect(q.length).toEqual(100);
    });
  });
});
