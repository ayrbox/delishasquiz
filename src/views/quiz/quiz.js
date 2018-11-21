import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import QuestionCount from '../../components/QuestionCount';
import Question from '../../components/Question';


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
  }

  componentDidMount() {
    const { generateQuestion } = this.props;
    generateQuestion();
  }

  /* eslint-disable class-methods-use-this */
  handleSubmitAnswer(e) {
    e.preventDefault();
  }

  render() {
    const answer = 0;
    return (
      <Layout>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="paper-card">
                <QuestionCount counter={1} total={10} />
                <Question question={{ digit1: 100, digit2: 200, operator: 'x' }} />
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
};

export default Quiz;
