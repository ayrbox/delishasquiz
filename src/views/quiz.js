<div className="App">
        <header
          className="app-header"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h1 className="app-title">Maths Quiz</h1>
        </header>
        <div className="App-intro">
          <Route exact path="/" render={() => <h1>Root</h1>} />
          <Route exact path="/test" component={GameCard} />
        </div>
      </div>
