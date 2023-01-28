// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  accelerateSpeed = val => {
    let result
    if (val >= 200) {
      result = val
    } else {
      result = val + 10
    }
    return result
  }

  decreaseSpeed = val => {
    let result
    if (val <= 0) {
      result = val
    } else {
      result = val - 10
    }
    return result
  }

  onAccelerate = () => {
    this.setState(prevState => ({
      speed: this.accelerateSpeed(prevState.speed),
    }))
  }

  applyBreak = () => {
    this.setState(prevState => ({
      speed: this.decreaseSpeed(prevState.speed),
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <h1 className="speed-details">Speed is {speed}mph</h1>
          <p className="limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              type="button"
              className="acceleration-btn"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-breaks-btn"
              onClick={this.applyBreak}
            >
              Apply Brakes
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
