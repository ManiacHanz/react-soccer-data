/**
 * 可共用的导航菜单栏
 */

import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

import styles from './common.less'

const { Item } = TabBar

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

 

  render() {
    const { data, history, location } = this.props
    return (
      <div className={styles.fixedBtm}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          
        >
          {
            data.map( v => {
              return (
                <Item
                  title={v.title}
                  key={v.path}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                  selected={ location.pathname === `/home${v.path}` }
                  onPress={ () => {
                    history.push(`${v.path}`)
                  }}
                ></Item>

                
              )
            })
          }
          
        </TabBar>
      </div>
    );
  }
}

export default withRouter(NavLink)