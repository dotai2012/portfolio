import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Button from '../../components/CustomButtons/Button';

import { fetchProjects, deleteProject } from '../../actions';

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

const mapStateToProps = ({ projects }) => ({
  projects,
});

@withStyles(styles)
@connect(mapStateToProps, { fetchProjects, deleteProject })
class Project extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  onDeleteProject = id => () => {
    this.props.deleteProject(id);
  }

  renderProjects = () => this.props.projects.map(({ title, _id }, index) => (
        <TableRow key={index}>
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell align="right">
                <Button simple component={Link} to={`/project/${_id}`} color="facebook">
                  View
                </Button>
                <Button simple component={Link} to={`/admin/project/${_id}`} color="facebook">
                  Edit
                </Button>
                <Button simple color="facebook" onClick={this.onDeleteProject(_id)}>
                  Delete
                </Button>
              </TableCell>
        </TableRow>
  ))

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button component={Link} to='/admin/new' color="facebook" size="lg" onClick={this.onLogin}>
            New Project
        </Button>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderProjects()}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default Project;
