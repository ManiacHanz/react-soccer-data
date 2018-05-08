import React, { Component } from 'react'

import { List } from 'antd-mobile'

import styles from './index.less'

const { Item } = List

class DataList extends Component {
  state = { 
    key: '',
    tabs: {
      jifenbang: '积分榜',
      saicheng1: '',
      saicheng2: '',
      saicheng3: '',
      sheshoubang: '射手榜',
    },
    views:{},
  }
  componentWillReceiveProps(nextProps){
    // console.log(nextProps)
    const {saicheng1} = this.state.tabs
    if(saicheng1 === nextProps.data.tabs.saicheng1){
      return false
    }
    this.setState({
      ...nextProps.data
    })
  }


  componentDidMount(){

  }
  render() {
    return(
      <div>1</div>
    )
  }
}

export default DataList