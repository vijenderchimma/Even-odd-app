// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0}

  onIncrement = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + number,
    }))
  }

  render() {
    const {randomNumber} = this.state
    let text
    if (randomNumber % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="main-heading">Count {randomNumber}</h1>
          <p className="description">Count is {text}</p>
          <button
            className="increment-button"
            type="button"
            onClick={this.onIncrement}
          >
            increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
