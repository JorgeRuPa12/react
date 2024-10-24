import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class DetalleCoche extends Component {

  state = {
    coche: []
  }
  
    findCoche = () => {
      let request = "api/Coches/FindCoche/" + this.props.id;
      let url = Global.urlCoches + request
      axios.get(url).then(response => {
        this.setState({
          coche: response.data
        })
      })
    }

    componentDidMount = () => {
      this.findCoche()
    }

    render() {
      return (
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-6'>
            <ul className='list-group text-center mt-3'>
              <li className='list-group-item active'>Coche: {this.props.id}</li>
              <li className='list-group-item'>{this.state.coche.marca} - {this.state.coche.modelo}</li>
              <li className='list-group-item'>{this.state.coche.conductor}</li>
              <li className='list-group-item'><img src={this.state.coche.imagen} width="384"/></li>
            </ul>
          </div>
          <div className='col-3'></div>
        </div>
      )
    }
}
