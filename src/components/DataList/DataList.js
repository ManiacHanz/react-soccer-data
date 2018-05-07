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
    let { tabs, views } = this.state
    
    let listHeader = Object.values(tabs).filter(v => v !== null)
    let listContent = Object.values(views).filter(v => v !== null)
    return (
      <div>
        
        {
          listHeader.map( (item, index) => {
            return (
              <div>
                <List key={item} renderHeader={ ()=> item}>
                  listContent.map( subitem => {
                    <Item>{subitem.c1}</Item>
                  })

                  
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