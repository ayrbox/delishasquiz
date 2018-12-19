import React from 'react';
import { Link } from 'react-router-dom';
// ImageSource: https://unsplash.com/photos/jvBXiynINGE
import bg from '../assets/images/bg.jpg';
import Footer from '../components/Footer';

const Landing = () => (
  <main className="landing-background" style={{ backgroundImage: `url(${bg})` }}>
    <div className="container text-center">
      <h1>Welcome to Maths Quiz</h1>

      <div className="row justify-content-center">
        <div className="col-1">
          <Link
            to="/game"
            className="btn btn-primary btn-lg"
          >
            Game
          </Link>
        </div>
        <div className="col-1">
          <Link
            to="/settings"
            className="btn btn-warning btn-lg"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </main>
);

export default Landing;
