import './App.css';
import ScreenerForm from "./components/ScreenerForm";
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { form: null }
  }

  async componentDidMount() {
    const response = await fetch("https://blueprint-assessment-api.herokuapp.com/v1/screener/questions")
    const form = await response.json()
    this.setState({ form: form })
  }

  render() {
    const form = this.state.form;

    if(form) {
      const displayName = form.content.display_name;
      const title = form.content.sections[0].title;
      const questions = form.content.sections[0].questions;
      const answers = form.content.sections[0].answers;

      return (
        <div className="container">
          <nav className="level">
            <div className="level-left is-size-4">Blueprint Screener</div>
          </nav>
          <ScreenerForm  displayName={displayName} title={title} questions={questions} answers={answers} />
        </div>
      );
    } else {
      <h2>Loading...</h2>
    }
  }
}

export default App;
