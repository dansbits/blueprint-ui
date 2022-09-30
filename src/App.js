import logo from './logo.svg';
import './App.css';
import formData from "./mockForm";
import ScreenerForm from "./components/ScreenerForm";
import React from 'react';

class App extends React.Component {

  render() {
    // TODO: replace this with a fetch call to retrieve the form from the API
    const form = formData;
    const displayName = formData.content.display_name;
    const title = formData.content.sections[0].title;
    const questions = formData.content.sections[0].questions;
    const answers = formData.content.sections[0].answers;

    return (
      <div className="container">
        <nav className="level">
          <div className="level-left is-size-4">Blueprint Screener</div>
        </nav>
        <ScreenerForm  displayName={displayName} title={title} questions={questions} answers={answers} />
      </div>
    );
  }
}

export default App;
