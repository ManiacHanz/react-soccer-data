import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Loadable from 'react-loadable'
import Loading from '../components/common/Loading'
const Home = Loadable({ loader: () => import('../page/Home/Home'), loading(){return <Loading /> }})
// import Home from '../page/Home/Home'

const Test = () => (
  <div>Test</div>
)

class RouteConfig extends Component {
  state = {  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={()=> (<Redirect to="/league" />) } />
        <Route path='/test' component={Test}/>
        <Route path='/:tab' component={Home} />
        {/* <Route exact path='/home' render={()=> (<Redirect to="/home/league" />) } />
        <Route exact path='/home/:id' component={Home}></Route> */}
      </Switch>
    )
  }
}

export default RouteConfig