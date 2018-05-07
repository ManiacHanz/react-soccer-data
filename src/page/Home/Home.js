import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../../components/common/Loading'
import NavLink from '../../components/common/NavLink'

const League = Loadable({ loader: () => import('./League'), loading(){return <Loading /> }})


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