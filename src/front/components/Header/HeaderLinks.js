
import React from 'react';

import { Link } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
          to="/"
          color="transparent"
          className={classes.navLink}
        >
           Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/projects"
          color="transparent"
          className={classes.navLink}
        >
           Projects
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/about"
          color="transparent"
          className={classes.navLink}
        >
           About
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/contact"
          color="transparent"
          className={classes.navLink}
        >
           Contact
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
