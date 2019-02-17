import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';

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
  renderProject = () => this.props.projects.map(({
    title, thumbnail, introduction, source, slug,
  }, index) => (
        <ProjectCard key={index} title={title} image={thumbnail} source={source} more={slug} >
              {introduction}
        </ProjectCard>
  ))

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Parallax filter image="https://demos.creative-tim.com/material-kit-react/static/media/bg4.199e9ec1.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem className={classes.center}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProjectCard title="Test" image="https://demos.creative-tim.com/material-kit-react/static/media/bg4.199e9ec1.jpg" toLive="https://www.youtube.com/watch?v=dQw4w9WgXcQ" toSource="https://www.youtube.com/watch?v=dQw4w9WgXcQ" toMore="/more" >
              fgjdsbhfjsfdhbgjfdgjdgjv
            </ProjectCard>
          </div>
        </div>

    </React.Fragment>
    );
  }
}

export default Home;
