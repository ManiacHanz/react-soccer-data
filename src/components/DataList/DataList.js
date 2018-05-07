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
    views:{}
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    const {saicheng1} = this.state.tabs
    if(saicheng1 === nextProps.data.tabs.saicheng1){
      return false
    }
    this.setState({
      ...nextProps
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps != this.state){
      return true
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot){
   
  }
  componentDidMount(){
    // console.log( 'data:', this.props)
  }
  render() {
    let { tabs, views } = this.state
    
    let listHeader = Object.values(tabs)
    let listContent = Object.values(views)
    return (
      <div>
        {
          listHeader.map( (item, index) => {
            return (
              <div>
                <List  key={index} renderHeader={ ()=> item}>
                </List>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default DataList