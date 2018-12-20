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
      answer: '',
    };
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  componentDidMount() {
    const { generateQuestion, settings } = this.props;
    const { level, operatorSettings, questionsPerQuiz } = settings;
    generateQuestion({ level, operatorSettings, questionsPerQuiz });
  }

  componentDidUpdate() {
    this.answerInput.focus();
  }

  /* eslint-disable class-methods-use-this */
  handleSubmitAnswer(e) {
    e.preventDefault();

    const { questions, submitAnswer, history } = this.props;
    const { questionIdx, answer } = this.state;

    if (!answer) {
      this.setState({ message: 'Please enter answer or click pass' });
      return;
    }

    submitAnswer({
      question: questions[questionIdx],
      answer: parseFloat(answer),
    });

    if ((questionIdx + 1) === questions.length) {
      history.push('/result');
    }

    this.setState(prev => ({
      questionIdx: prev.questionIdx + 1,
      answer: '',
      message: '',
    }));
  }

  handlePass(e) {
    e.preventDefault();

    const { questions, submitAnswer, history } = this.props;
    const { questionIdx } = this.state;

    submitAnswer({
      question: questions[questionIdx],
      answer: 'PASS',
    });


    if ((questionIdx + 1) === questions.length) {
      history.push('/result');
    }

    this.setState(prev => ({
      questionIdx: prev.questionIdx + 1,
      answer: '',
      message: '',
    }));
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      answer: e.target.value,
    });
  }

  render() {
    const { questions } = this.props;
    const { questionIdx, answer, message } = this.state;

    if (questions.length === 0) return null;

    return (
      <Layout>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8">
              <div className="paper-card">
                <QuestionCount counter={(questionIdx + 1)} total={questions.length} />
                <Question question={questions[questionIdx]} />
                <form onSubmit={this.handleSubmitAnswer}>
                  <div className="form-group row justify-content-start text-danger">
                    <div className="col">
                      { message }
                    </div>
                  </div>
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
                  <button
                    className="btn btn-outline-warning ml-3"
                    type="button"
                    onClick={this.handlePass}
                  >
                    Pass
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
  submitAnswer: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      digit1: PropTypes.number.isRequired,
      digit2: PropTypes.number.isRequired,
      operator: PropTypes.string.isRequired,
    }),
  ).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  settings: PropTypes.shape({
    level: PropTypes.number,
    operators: PropTypes.array,
    questionsPerQuiz: PropTypes.number,
  }).isRequired,
};

export default Quiz;
