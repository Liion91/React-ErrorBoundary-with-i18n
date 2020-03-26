import React from "react";
import ReactDOM from "react-dom";
import Test from './Test';
import ErrorBoundary from './ErrorBoundary';
import './i18n';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorBoundaryKey: 0
    }
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
  }

  handleResetButtonClick() {
    this.setState(prevState => ({
      errorBoundaryKey: prevState.errorBoundaryKey + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleResetButtonClick}>
          reset error
      </button>

        <ErrorBoundary key={this.state.errorBoundaryKey}>
          <Test />
        </ErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
