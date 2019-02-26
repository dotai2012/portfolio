import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import natureBackground from '../assets/img/background-1.jpg';

import Button from '../components/CustomButtons/Button';
import Parallax from '../components/Parallax/Parallax';
import ProjectCard from '../components/Card/ProjectCard';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import landingPageStyle from '../assets/jss/material-kit-react/views/landingPage.jsx';
import { fetchProjects } from '../actions';

const mapStateToProps = ({ projects }) => ({
  projects,
});

@withStyles(landingPageStyle)
@connect(mapStateToProps, { fetchProjects })
class Home extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProject = () => this.props.projects.map(({
    title, thumbnail, introduction, live, source, slug,
  }, index) => (
      <GridItem xs={12} sm={12} md={6} key={index}>
        <ProjectCard title={title} image={`img/${thumbnail}`} live={live} source={source} more={`project/${slug}`} >
                {introduction}
        </ProjectCard>
      </GridItem>
  ))

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Parallax filter image={natureBackground}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem className={classes.center}>
                <h1 className={classes.title}>Tai Do</h1>
                <h4>
                  A Web Developer / Designer
                </h4>
                <br />
                <Button
                  color="info"
                  size="lg"
                  component={Link}
                  to="/about"
                >
                  <i className="fas fa-male" /> About Me
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
          <div className={classes.container}>
            <GridContainer justify="center">
                {this.renderProject()}
            </GridContainer>
          </div>
        {/* </div> */}

    </React.Fragment>
    );
  }
}

export default Home;
