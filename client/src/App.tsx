import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as H from 'history';
import { NavigationDrawer } from 'react-md';
import NavLink from './components/NavLink';

import './App.css';

import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

interface INavSettings {
  exact?: boolean;
  label: string;
  to: string;
  icon: string;
  component: React.ComponentClass;
}

const DEFAULT_TITLE = 'Welcome';
const navItems: INavSettings[] = [
  {
    exact: true,
    label: 'Home',
    to: '/',
    icon: 'home',
    component: Home
  },
  {
    label: 'Page 1',
    to: '/page-1',
    icon: 'bookmark',
    component: Page1
  },
  {
    label: 'Page 2',
    to: '/page-2',
    icon: 'donut_large',
    component: Page2
  },
  {
    label: 'Page 3',
    to: '/page-3',
    icon: 'flight_land',
    component: Page3
  }
];

class App extends React.Component {

  getLocationTitle(location: H.Location): string {
    const currentPage = navItems.find(item => item.to === location.pathname);
    return currentPage && currentPage.label || DEFAULT_TITLE;
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="Site Navigation"
            toolbarTitle={this.getLocationTitle(location)}
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              {
                navItems.map(props => (
                  <Route
                    key={props.to}
                    exact={props.exact}
                    path={props.to}
                    location={location}
                    component={props.component}
                  />
                ))
              }
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default App;
