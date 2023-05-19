import React, { Component } from 'react';

export class FeedBackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBadClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let totalFeedBack = 0;

    for (const value of values) {
      totalFeedBack += value;
    }
    return totalFeedBack;
  };

  countPositiveFeedbackPercentage = () => {
    const values = Object.values(this.state);
    let total = 0;
    let positiveFeedBackPercentage = 0;
    const { good } = this.state;

    for (const value of values) {
      total += value;
    }

    positiveFeedBackPercentage = (good / total) * 100;
    let normilizedFeedBackPercentage = Math.round(positiveFeedBackPercentage);

    return normilizedFeedBackPercentage;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleGoodClick}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralClick}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadClick}>
          Bad
        </button>
        <h3>Statistics</h3>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>
          Positive feedback:
          {this.countTotalFeedback() === 0
            ? 0
            : this.countPositiveFeedbackPercentage()}
          %
        </p>
      </div>
    );
  }
}
