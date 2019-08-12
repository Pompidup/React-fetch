import React, { Component } from 'react';

import DisplayQuote from './DisplayQuote';
import GenerateQuote from './GenerateQuote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      simpsonQuote: {
        quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
        character: "Nelson Muntz",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
      }
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          simpsonQuote: data[0],
        });
      });
  }


  render() {
    return (
      <div>
        <DisplayQuote quote={this.state.simpsonQuote} />
        <GenerateQuote selectQuote={() => this.getQuote()} />
      </div>
    );
  }
}

export default App;