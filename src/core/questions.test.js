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
    it('returns one of operator from array', () => {
      const operatorSets = [
        ['+', '-', '/', 'x'],
        ['+', '-'],
        ['/', 'x'],
        ['-', '/', '+'],
        ['x', '+', '/'],
      ];
      operatorSets.forEach((set) => {
        for (let count = 0; count <= 10; count += 1) {
          const randomOperator = questions.getRandomOperator(set);
          expect(set).toContain(randomOperator);
        }
      });
    });

    it('throws an exception on non array operators', () => {
      expect(() => questions.getRandomOperator({ a: 'a', b: 'b' })).toThrow();
      expect(() => questions.getRandomOperator('+')).toThrow();
      expect(() => questions.getRandomOperator(100)).toThrow();
    });
  });

  describe('#isValidOperator', () => {
    it('returns false', () => {
      ['2', '5', 0, '%', '£', '@'].forEach((operator) => {
        expect(questions.isValidOperator(operator)).toBe(false);
      });
    });

    it('returns true', () => {
      Object.keys(OPERATORS).forEach((operatorKey) => {
        expect(questions.isValidOperator(OPERATORS[operatorKey])).toBe(true);
      });
    });
  });

  describe('#isValidQuestion', () => {
    describe('when digits are greater than ubound', () => {
      it('throws error on second digit greater', () => {
        expect(questions.isValidQuestion({
          digit1: 20,
          digit2: 30,
          operator: 'x',
        }, 20)).toBe(false);
      });

      it('throws error on first digit great', () => {
        expect(questions.isValidQuestion({
          digit1: 11,
          digit2: 5,
          operator: '+',
        }, 10)).toBe(false);
      });
    });

    describe('when digit are under ubound', () => {
      it('returns true on valid questions', () => {
        expect(questions.isValidQuestion({
          digit1: 12,
          digit2: 8,
          operator: 'x',
        }, 20)).toBe(true);
      });
    });
  });

  describe('#get question', () => {
    it('returns question object', () => {
      const newQuestion = questions.getQuestion(['+', '-', '/', 'x']);
      expect(newQuestion).toBeInstanceOf(Object);
    });

    it('returns invalid operator', () => {
      expect(() => questions.getQuestion(['%'])).toThrow();
    });

    it('SUBSTRACTION: first digit must be greater than second', () => {
      for (let idx = 0; idx < 100; idx += 1) {
        const q = questions.getQuestion([OPERATORS.SUBSTRACTION]);
        expect(q.digit1).toBeGreaterThanOrEqual(q.digit2);
      }
    });

    it('DIVISION: first digit must be division without remainder', () => {
      for (let idx = 0; idx < 100; idx += 1) {
        const q = questions.getQuestion([OPERATORS.DIVISION]);
        expect((q.digit1 % q.digit2)).toEqual(0);
      }
    });
  });

  describe('#get questions', () => {
    it('returns array of questions', () => {
      const q = questions.getQuestions(1, ['+', '-', 'x', '/'], 100);
      expect(Array.isArray(q)).toBe(true);
      expect(q.length).toEqual(100);
    });

    it('returns invalid operator', () => {
      expect(() => questions.getQuestions(100, '%')).toThrow();
    });
  });

  describe('#add', () => {
    it('adds arrays of number', () => {
      const r = questions.add([10, 20]);
      expect(r).toBe(30);
      const sum1 = questions.add([1, 2, 3, 4]);
      expect(sum1).toBe(10);
      const sum2 = questions.add([2, 5, 20, 40]);
      expect(sum2).toBe(67);
    });

    it('throw error on non number array', () => {
      expect(() => questions.add(['a', 'b'])).toThrow();
      expect(() => questions.add([0, 2, 'ab', 20])).toThrow();
      expect(() => questions.add(10)).toThrow();
    });
  });
});
