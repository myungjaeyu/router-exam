import React, { Component } from 'react';

import { Switch, Route, Link, withRouter } from 'react-router-dom';

const menus = ['ranking', 'new', 'reward', 'benefit', 'event']

class Menu extends Component {

  componentDidMount = () => console.log('menu component did mount')

  render = () => <div>{ menus.map((e, i) => <Link key={ i } to={`/nested/${ e }`}>{ e + ' ' }</Link>) } </div>

}

const Home = () => <div>Home</div>

const Heart = () => <div>Heart</div>

const Nested = () => <div>{ menus.map((e, i) => <Route key={ i } exact path={`/nested/${ e }`} component={ () => <div>NestedChild - { e }</div> } />) } </div>

class App extends Component {

  render() {

    return (
      <div className="App">

        <Link to='/'>Home</Link>
        <Link to='/heart'> Heart</Link>

        <Route path="/(|nested)" component={Menu} />

        <Switch>
          <div>
  
            <Route exact path="/" component={ Home } />
            <Route exact path="/heart" component={ Heart } />
            <Route path="/nested/" component={ Nested } />

          </div>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
