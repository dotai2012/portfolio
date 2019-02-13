import React, { Component, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import RouteApp from '../route';
import '../assets/scss/material-kit-react.scss';


@withRouter
class App extends Component {
  renderApp = () => {
    if (!this.props.location.pathname.startsWith('/admin')) {
      const Headers = React.lazy(() => import('./Header/Header'));
      const HeaderLinks = React.lazy(() => import('./Header/HeaderLinks'));
      const Footer = React.lazy(() => import('./Footer/Footer'));

      return (
            <Suspense fallback={<div>Loading...</div>}>
              <Headers
                color="transparent"
                brand="Tai Do"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                  height: 400,
                  color: 'white',
                }}
              />
              <RouteApp />
              {this.props.location.pathname !== '/login' ? <Footer /> : null}
            </Suspense>
      );
    }

    const Drawer = React.lazy(() => import('./Drawer/Drawer'));

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Drawer>
          <RouteApp />
        </Drawer>
      </Suspense>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderApp()}
      </React.Fragment>
    );
  }
}
export default App;
