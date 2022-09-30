import React from 'react';

// This component has become a little too complex and has a lot of concerns at this point. I would
// prefer to split this up into smaller components at this put but leaving as is for the sake of time.
class ScreenerForm extends React.Component {
  constructor(props) {
    super(props);
    // Assuming the app is actually more complex and I have more time, I would store this state
    // in a state management system like redux. I'm storing state within my component for simplicity
    // here but I recognize that this isn't sustainable for a larger application.
    this.state = {
      responses: [],
      currentQuestion: 0
    };
    this.onAdvance = this.onAdvance.bind(this);
  }
  
  render() {
    var body;
    if(this.state.currentQuestion < this.props.questions.length) {
      const qst = this.props.questions[this.state.currentQuestion];
      body = <div>
        {qst.title}
        {this.renderOptions()}
      </div>
    } else {
      body = <table className="table">
        <thead><tr><td>Question</td><td>Response</td></tr></thead>
        <tbody>
          {this.renderResults()}
        </tbody>
      </table>
    }

    return <div className="box">
      <div className="is-size-4">{ this.props.displayName }</div>
      <div className="is-size-5">{ this.props.title }</div>
      { body }
    </div>
  }

  renderResults() {
    return this.props.questions.map((qst, index) => {
      const response = this.state.responses[index];
      return <tr key={qst.question_id}>
        <td>{qst.title}</td>
        <td>{response}</td>
      </tr>
    })
  }

  renderOptions() {
    return this.props.answers.map((answer) => {
      // The way that I'm rendering the buttons makes them different size and gives then differing
      // visual weight on the screeen. Maybe this could sway people to pick one over the other. I know
      // design considerations were not part of this exercise but wanted to call out that it bugs me. :(
      return <div className="mb-1" key={answer.value}>
        <button className="button is-link" responsevalue={answer.value} onClick={this.onAdvance}>{ answer.title }</button>
      </div>
    })
  }

  onAdvance(evt) {
    const value = evt.target.getAttribute('responsevalue');
    var responses = this.state.responses;
    responses.push(value)
    this.setState({ responses: responses, currentQuestion: this.state.currentQuestion + 1 })
  }
}

export default ScreenerForm;