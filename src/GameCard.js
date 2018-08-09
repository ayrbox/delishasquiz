import React, { Component } from "react";
import classnames from "classnames";

class GameCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      digitOne: 0,
      digitTwo: 0,
      answer: "",
      answerLog: []
    };

    this.handleStartGame = this.handleStartGame.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.handleStartGame();
  }

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  handleStartGame() {
    const maxQuestionInt = 20;
    const digitOne = this.getRandomInt(maxQuestionInt);
    const digitTwo = this.getRandomInt(maxQuestionInt);

    this.setState({
      digitOne: digitOne,
      digitTwo: digitTwo,
      answer: ""
    });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      answer: e.target.value
    });
  }

  checkAnswer(e) {
    e.preventDefault();
    const { digitOne, digitTwo, answer, answerLog } = this.state;
    const correctAnswer = digitOne + digitTwo;
    const yourAnswer = parseInt(answer, 0);

    this.setState({
      answerLog: [
        {
          question: `${digitOne} + ${digitTwo}`,
          correctAnswer: correctAnswer,
          yourAnswer: yourAnswer,
          correct: correctAnswer === yourAnswer
        },
        ...answerLog
      ]
    });

    this.handleStartGame();
  }

  render() {
    const { digitOne, digitTwo, answerLog } = this.state;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="p-5 border">
              <h3 className="mb-5">What is the answer?</h3>
              <h1 className="mb-5">
                {digitOne} + {digitTwo}
              </h1>

              <form onSubmit={this.checkAnswer}>
                <div className="form-group row">
                  <label className="col-sm-4">Enter Your Answer</label>
                  <div className="col-sm-8">
                    <input
                      className="form-control"
                      type="number"
                      value={this.state.answer.toString()}
                      onChange={this.handleChange}
                      autoFocus
                    />
                  </div>
                </div>

                <button className="btn btn-primary" type="submit">
                  Check Answer
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="p-5 border">
              <h3 className="m-3">
                Total Correct Answer :{" "}
                {answerLog.reduce((t, l) => {
                  return t + (l.correct ? 1 : 0);
                }, 0)}{" "}
                of {answerLog.length}
              </h3>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Problem</strong>
                  <strong>Answer</strong>
                  <strong>Your Answer</strong>
                </li>
                {answerLog.map((l, i) => (
                  <li
                    key={i}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{l.question}</span>
                    <span>{l.correctAnswer}</span>
                    <span
                      className={classnames({
                        "text-success": l.correct,
                        "text-danger": !l.correct
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

export default GameCard;
