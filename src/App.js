import React, { Component } from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectOptions: [],
      label: '',
      value: '',
      count: 7
    }
  }

  getOptions() {
    // init raw data for dropdown list
    const data = [
      { label: "Apple", value: 1 },
      { label: "Facebook", value: 2 },
      { label: "Netflix", value: 3 },
      { label: "Tesla", value: 4 },
      { label: "Amazon", value: 5 },
      { label: "Alphabet", value: 6 },
    ]

    this.setState({ selectOptions: data })
  }

  handleChange = e => {
    this.setState({ value: e.value, label: e.label })
  }

  handleAdd = () => {
    console.log('Add clicked', this.state.count)
    this.setState({ count: this.state.count + 1 })

    const options = this.state.selectOptions
      .filter(option => option.label !== this.state.label)
      .concat({ label: this.state.label, value: this.state.count })

    this.setState({ selectOptions: options })
  }

  handleInput = e => {
    const regEx = /^[0-9a-zA-Z]+$/
    const inputVal = e.target.value

    if (inputVal.match(regEx)) {
      this.setState({ label: inputVal })
    } else {
      alert(`Input is not valid: ${inputVal}`)
    }
  }

  componentDidMount() {
    this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)

    return (
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-mid-3 button">
              <button onClick={this.handleAdd} className="btn btn-secondary">Add Option</button>
            </div>
            <div className="col-mid-3 input">
              <input className="text-input" onChange={this.handleInput} placeholder="Enter option" />
            </div>
          </div>
          <div className="row select-div">
            <div className="col-mid-3 select">
              <Select options={this.state.selectOptions} onChange={this.handleChange} />
            </div>
            <div className="col-mid-3 option">
              <span>You have selected <strong>{this.state.label}</strong></span>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App
