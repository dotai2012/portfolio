import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  List, ListItem, withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import Button from '../CustomButtons/Button';

import footerStyle from '../../assets/jss/material-kit-react/components/footerStyle.jsx';

const style = {
  margin5: {
    margin: '5px',
  },
};

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div>
          <Button justIcon link href="mailto:dothientai2012@gmail.com" className={classes.margin5}>
            <i className="fas fa-envelope" />
          </Button>
          <Button justIcon link href="https://github.com/dotai2012" className={classes.margin5}>
            <i className='fab fa-github' />
          </Button>
          <Button justIcon link href="https://www.linkedin.com/in/tai-do" className={classes.margin5}>
            <i className='fab fa-linkedin' />
          </Button>
        </div>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/"
                className={classes.block}
              >
                Tai Do
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/about"
                className={classes.block}
              >
                About
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/contact"
                className={classes.block}
              >
                Contact
              </Link>
            </ListItem>
          </List>
        <div>
          &copy; {1900 + new Date().getYear()} , made with React and Material UI
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
};

export default withStyles({ ...footerStyle, ...style })(Footer);
