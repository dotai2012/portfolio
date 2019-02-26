
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField, Icon } from '@material-ui/core';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import techBackground from '../assets/img/background-3.png';

import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';
import CardHeader from '../components/Card/CardHeader';
import CardFooter from '../components/Card/CardFooter';
import CustomInput from '../components/CustomInput/CustomInput';

import fixedBackgroundPageStyle from '../assets/jss/material-kit-react/views/fixedBackgroundPage.jsx';

import { postMessage } from '../actions';

const mapStateToProps = ({ user }) => ({
  user,
});

const styles = {
  textarea: {
    width: '100%',
  },
  social: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
};

@withStyles({ ...fixedBackgroundPageStyle, ...styles })
@connect(mapStateToProps, { postMessage })
class Contact extends Component {
  state = {
    title: '',
    author: '',
    email: '',
    content: '',
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = async () => {
    try {
      const res = await this.props.postMessage(this.state);
      console.log(res);
      toast.info('Sent the message', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (e) {
      toast.error('Something went wrong, try again later', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  onInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }

  render() {
    const { classes } = this.props;
    return (
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: `url(${techBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h4>Contact me</h4>
                    </CardHeader>
                    <CardBody>
                    <div className={classes.social}>
                      <Button component="a" href="" justIcon round color="info"><i className="fas fa-envelope" /></Button>
                      <Button component="a" justIcon round color="info"><i className="fab fa-github" /></Button>
                      <Button component="a" justIcon round color="info"><i className="fab fa-linkedin" /></Button>
                    </div>
                    <CustomInput
                        labelText="Title"
                        id="title"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'email',
                          name: 'title',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                title
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.title,
                          onChange: this.onInputChange,
                        }}
                      />
                      <CustomInput
                        labelText="Full Name"
                        id="name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          name: 'author',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                person
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.author,
                          onChange: this.onInputChange,
                        }}
                      />
                      <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'email',
                          name: 'email',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                mail
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.email,
                          onChange: this.onInputChange,
                        }}
                      />
                      <TextField
                        className={classes.textarea}
                        name="content"
                        placeholder="Send me a message"
                        multiline={true}
                        rows={4}
                        rowsMax={6}
                        variant="outlined"
                        value={this.state.content}
                        onChange={this.onInputChange}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="info" size="lg" onClick={this.onSubmit}>
                        Submit
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}

export default Contact;
