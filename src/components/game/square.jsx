import React from 'react'
import ReactDOM from 'react-dom'
export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    )
  }
}