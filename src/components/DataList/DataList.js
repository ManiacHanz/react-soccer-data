import React, { Component } from 'react'

import { List, Table } from 'antd-mobile'

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
  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps)
  //   const {saicheng1} = this.state.tabs
  //   if(saicheng1 === nextProps.data.tabs.saicheng1){
  //     return false
  //   }
  //   this.setState({
  //     ...nextProps.data
  //   })
  // }
  static getDerivedStateFromProps(nextProps, prevState){
    // 不知道为什么第一次没有数据的时候也触发了这个钩子
    if( !nextProps.data.tabs) return prevState
    if( nextProps.data.tabs.saicheng1 !== prevState.tabs.saicheng1){
      return {
        key: nextProps.data.key,
        tabs: nextProps.data.tabs,
        views: nextProps.data.views,
      }
    }
    return null
  }

  componentDidMount(){

  }
  render() {
    return(
      <div>{this.state.key}</div>
    )
  }
}

export default DataList