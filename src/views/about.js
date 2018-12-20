import React from 'react';
import { Link } from 'react-router-dom';
// ImageSource: https://unsplash.com/photos/jvBXiynINGE
import bg from '../assets/images/bg.jpg';
import Footer from '../components/Footer';

const About = () => (
  <main className="landing-background" style={{ backgroundImage: `url(${bg})` }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8">
          <div className="paper-card">
            <h3>About MathsQuiz</h3>
            <p>
              Simple maths quiz for children 6-10.
            </p>
            <p>
              You can choose operators, level and number questions from settings.
              This will be give list of random two number with random operators.
            </p>
            <p>
              If you there is any issue, suggestions, or advice please let know via
              {' '}
              <a href="https://github.com/ayrbox/mathsquiz/issues">github.</a>
            </p>
            <Link
              to="/game"
              className="btn btn-primary btn-lg"
            >
              Start new game
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </main>
);

export default About;
