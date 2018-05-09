import React, { Component } from 'react'
import { WhiteSpace,  Tabs  } from 'antd-mobile'

import DataList from '../DataList/DataList'

import axios from 'axios'

import { getLeague } from '../../config/api'
class Tab extends Component {
  state = { 
    list: [{},{},{},{},{}],
  }
  async componentDidMount(){
    this.getLeague('西甲', 0)
    // console.log('componentDidMount')
  }
  onTabClickhandler(tab, index) {
    const { list } = this.state
    if(list[index] !== null ){
      return
    }
    // console.log('onTabClick123', index, tab)
    this.getLeague(tab.title, index)
  }
  async getLeague( title, index ){
    let response = await getLeague(title)
    // console.log(response)
    let {list} = this.state
    list.splice(index,1,response.data.result)
    this.setState({
      list: list,
    })
  }
  render() {
    const tabs = [
      { title: '西甲' },
      { title: '英超' },
      { title: '意甲' },
      { title: '德甲' },
      { title: '中超' },
    ]
    let {list} = this.state
    return (
      <div>
        <Tabs tabs={tabs}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => this.onTabClickhandler(tab, index) }
        >
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <WhiteSpace></WhiteSpace>
            <DataList data={list[0]}></DataList>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content4 of third tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content4 of third tab
          </div>
        </Tabs>

      </div>
    );
  }
}

export default Tab