import React, { Component, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logoImage from '../assets/img/logo.png';

import '../assets/scss/material-kit-react.scss';
import RouteApp from '../route';

const style = {
  logo: {
    width: '4rem',
  },
};

@withRouter
@withStyles(style)
class App extends Component {
  renderApp = () => {
    const { classes } = this.props;
    if (!this.props.location.pathname.startsWith('/admin')) {
      const Headers = React.lazy(() => import('./Header/Header'));
      const HeaderLinks = React.lazy(() => import('./Header/HeaderLinks'));
      const Footer = React.lazy(() => import('./Footer/Footer'));

      return (
            <Suspense fallback={<div>Loading...</div>}>
              <Headers
                color="transparent"
                brand={<img src={logoImage} className={classes.logo} />}
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                  height: 100,
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
        <ToastContainer />
        {this.renderApp()}
      </React.Fragment>
    );
  }
}
export default App;
