import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge  } from 'antd-mobile'

import DataList from '../DataList/DataList'

const dataSource = require('../../data/league')


class Tab extends Component {
  state = { 
    list: [{},{},{},{},{}],
  }
  componentDidMount(){
    let data = dataSource.result
    let {list} = this.state
    list.splice(0,1,data)
    this.setState({
      list: list,
    })
    // console.log(list)
  }
  onTabClickhandler(tab, index) {
    console.log('onTabClick123', index, tab)
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