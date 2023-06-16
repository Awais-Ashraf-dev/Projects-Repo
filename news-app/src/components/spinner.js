import React, { Component } from 'react'
import loader from './loader.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center {{width:200px}}">
        <img src={loader} alt="Spinner" />
      </div>
    )
  }
}

export default Spinner
