import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Button from '../../components/CustomButtons/Button';

import { fetchMessages, deleteMessage } from '../../actions';

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

const mapStateToProps = ({ messages }) => ({
  messages,
});

@withStyles(styles)
@connect(mapStateToProps, { fetchMessages, deleteMessage })
class Message extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  onDeleteMessage = slug => () => {
    this.props.deleteMessage(slug);
  }

  renderMessages = () => this.props.messages.map(({
    title, author, email, content, slug,
  }, index) => (
        <TableRow key={index}>
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell component="th" scope="row">
                {author}
              </TableCell>
              <TableCell component="th" scope="row">
                {email}
              </TableCell>
              <TableCell component="th" scope="row">
                {content}
              </TableCell>
              <TableCell align="right">
                <Button simple color="facebook" onClick={this.onDeleteMessage(slug)}>
                  Delete
                </Button>
              </TableCell>
        </TableRow>
  ))

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Content</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderMessages()}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default Message;
