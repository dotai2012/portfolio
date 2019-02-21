import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Button from '../components/CustomButtons/Button';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Parallax from '../components/Parallax/Parallax';

import planBackground from '../assets/img/background-2.png';
import profileImage from '../assets/img/profile.jpg';

import profilePageStyle from '../assets/jss/material-kit-react/views/profilePage.jsx';

@withStyles(profilePageStyle)
class About extends Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
    );
    return (
      <div>
        <Parallax small filter image={planBackground} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profileImage} className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Tai Do</h3>
                      <h6>Web Developer / Designer</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className='fab fa-twitter' />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className='fab fa-instagram' />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className='fab fa-facebook' />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
