import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import NavLink from '../../components/common/NavLink'


const League =() => {
  return (
  <div>League</div>
    
  )
}

const Team =() => (
  <div>Team</div>
)
const Me =() => (
  <div>Me</div>
)
class Home extends Component {
  state = {  }
  static menuData = [
    {
      path: '/league',
      icon: 'boss',
      title: '联赛',
      component: League,
    },
    {
      path: '/team',
      icon: 'boss',
      title: '球队',
      component: Team,
    },
    {
      path: '/me',
      icon: 'boss',
      title: '我的',
      component: Me,
    }
  ]
  render() {
    const { match } = this.props
    return (
      <div>
        <div>欢迎来到soccer</div>
        <div>
          {
            Home.menuData.map(v => {
              return (
                <Route key={v.path} path={`/home${v.path}`} component={v.component}/>
              )
            })
          }
         
        </div>
        <NavLink data={Home.menuData}></NavLink>
      </div>
    )
  }
}

export default withRouter(Home)