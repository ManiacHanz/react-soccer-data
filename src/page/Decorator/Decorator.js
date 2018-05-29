import React, { Component } from 'react'
import decorator from './decorate'


class Decorator extends Component {
  state = { 
    a: 'a'
  }

  @decorator()
  say(){
    console.log(this.state.a)
  }
  componentDidMount(){
    setTimeout(() => {
      this.say()
      
    }, 2000);
  }

  render() {
    return (
      <div>Decorator</div>
    )
  }
}

export default Decorator