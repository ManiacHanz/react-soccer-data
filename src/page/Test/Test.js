import React, { Component, Children } from 'react'
// import { Table } from 'antd'
class Test extends Component {
  
  state = {  }
 
  componentDidMount(){
  }
  render() {
    return (
      <div>
        <Wrapper pa={'pa'} pb={'pb'}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Wrapper>
      </div>
    )
  }
}

class Wrapper extends Component {
  state={}
  render(){
    const { pa, ...others } = this.props
    console.log('test:',Children)
    return (
      <div {...others} />
    )
  }
}

export default Test