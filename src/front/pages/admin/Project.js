import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { fetchProject } from '../../actions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

@withStyles(styles)
@connect(null, { fetchProject })
class Project extends Component {
  componentDidMount() {
    this.props.fetchProject();
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </Paper>
    );
  }
}

export default Project;
