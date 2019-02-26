
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { InputAdornment, Icon } from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import { connect } from 'react-redux';

import abstractBackground from '../assets/img/background-4.png';

import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';
import CardHeader from '../components/Card/CardHeader';
import CardFooter from '../components/Card/CardFooter';
import CustomInput from '../components/CustomInput/CustomInput';
import Footer from '../components/Footer/Footer';

import fixedBackgroundPageStyle from '../assets/jss/material-kit-react/views/fixedBackgroundPage.jsx';

import { loginUser } from '../actions';

const mapStateToProps = ({ user }) => ({
  user,
});

@withStyles(fixedBackgroundPageStyle)
@connect(mapStateToProps, { loginUser })
class LoginPage extends React.Component {
  state = {
    cardAnimaton: 'cardHidden',
    email: '',
    password: '',
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({ cardAnimaton: '' });
      },
      250,
    );
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.props.history.push('/admin');
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onLogin = () => {
    const { email, password } = this.state;
    this.props.loginUser(email, password);
  }

  onInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onLogin();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: `url(${abstractBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Authentication</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'email',
                        name: 'email',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        value: this.state.email,
                        onChange: this.onInputChange,
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'password',
                        name: 'password',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        value: this.state.password,
                        onChange: this.onInputChange,
                        onKeyPress: this.onInputKeyPress,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="info" size="lg" onClick={this.onLogin}>
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    );
  }
}

export default LoginPage;
