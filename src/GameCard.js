import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { generateQuestion } from './actions';

import { getRandomInt } from './core/questions';

class GameCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      digitOne: 0,
      digitTwo: 0,
      answer: '',
      answerLog: [],
    };

    this.handleStartGame = this.handleStartGame.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.handleStartGame();
  }

  handleStartGame() {
    const maxQuestionInt = 20;
    const digitOne = getRandomInt(maxQuestionInt);
    const digitTwo = getRandomInt(maxQuestionInt);

    this.setState({
      digitOne,
      digitTwo,
      answer: '',
    });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      answer: e.target.value,
    });
  }

  checkAnswer(e) {
    e.preventDefault();
    const {
      digitOne,
      digitTwo,
      answer,
      answerLog,
    } = this.state;
    const correctAnswer = digitOne + digitTwo;
    const yourAnswer = parseInt(answer, 0);

    this.setState({
      answerLog: [
        {
          question: `${digitOne} + ${digitTwo}`,
          correctAnswer,
          yourAnswer,
          correct: correctAnswer === yourAnswer,
        },
        ...answerLog,
      ],
    });

    this.handleStartGame();
  }

  render() {
    const { digitOne, digitTwo, answerLog } = this.state;
    const { answer, generateQuestionFunc } = this.props;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="p-5 border">
              <h3 className="mb-5">What is the answer?</h3>
              <h1 className="mb-5">
                {digitOne}
                +
                {digitTwo}
              </h1>

              <form onSubmit={this.checkAnswer}>
                <div className="form-group row">
                  <label
                    className="col-sm-4"
                    htmlFor={this.answerInput}
                  >
                  Enter Your Answer
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        type="number"
                        value={(answer || '').toString()}
                        onChange={this.handleChange}
                        ref={(node) => {
                          this.answerInput = node;
                        }}
                      />
                    </div>
                  </label>
                </div>

                <button className="btn btn-primary" type="submit">
                  Check Answer
                </button>
              </form>

              <button
                className="btn bnt-lg btn-danger"
                type="submit"
                onClick={generateQuestionFunc}
              >
                Generate
              </button>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="p-5 border">
              <h3 className="m-3">
                Total Correct Answer :
                {answerLog.reduce((t, l) => t + (l.correct ? 1 : 0), 0)}
                of
                {answerLog.length}
              </h3>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Problem</strong>
                  <strong>Answer</strong>
                  <strong>Your Answer</strong>
                </li>
                {answerLog.map((l, i) => (
                  <li
                    key={i.question}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{l.question}</span>
                    <span>{l.correctAnswer}</span>
                    <span
                      className={classnames({
                        'text-success': l.correct,
                        'text-danger': !l.correct,
                      })}
                    >
                      {l.yourAnswer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GameCard.defaultProp = {
  answer: '',
};

GameCard.propTypes = {
  answer: PropTypes.func.isRequired,
  generateQuestionFunc: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  question: state.question,
});
const mapDispatchToProps = dispatch => bindActionCreators({ generateQuestion }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameCard);
