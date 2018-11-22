import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import QuestionCount from '../../components/QuestionCount';
import Question from '../../components/Question';


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIdx: 0,
    };
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
  }

  componentDidMount() {
    const { generateQuestion } = this.props;
    generateQuestion();
  }

  componentDidUpdate() {
    this.answerInput.focus();
  }

  /* eslint-disable class-methods-use-this */
  handleSubmitAnswer(e) {
    e.preventDefault();
    this.setState(prev => ({
      questionIdx: prev.questionIdx + 1,
    }));
  }

  render() {
    const answer = 0;
    const { questions } = this.props;
    const { questionIdx } = this.state;

    if (questions.length === 0) return null;

    return (
      <Layout>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="paper-card">
                <QuestionCount counter={(questionIdx + 1)} total={questions.length} />
                <Question question={questions[questionIdx]} />
                <form onSubmit={this.handleSubmitAnswer}>
                  <div className="form-group row justify-content-start">
                    <label
                      className="col-sm-6"
                      htmlFor={this.answerInput}
                    >
                      Enter Your Answer
                      <input
                        className="form-control"
                        type="number"
                        value={(answer || '').toString()}
                        onChange={this.handleChange}
                        ref={(node) => {
                          this.answerInput = node;
                        }}
                      />
                    </label>
                  </div>
                  <button className="btn btn-outline-primary" type="submit">
                    Check Answer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}


Quiz.propTypes = {
  generateQuestion: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      digit1: PropTypes.number.isRequired,
      digit2: PropTypes.number.isRequired,
      operator: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Quiz;
