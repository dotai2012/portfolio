
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { Icon } from '@material-ui/core';
import { connect } from 'react-redux';
import Carousel from 'react-slick';

import techBackground from '../assets/img/background-5.jpg';

import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';

import fixedBackgroundPageStyle from '../assets/jss/material-kit-react/views/fixedBackgroundPage.jsx';

import { fetchProject } from '../actions';

const mapStateToProps = ({ projects }) => ({
  projects,
});

@withStyles(fixedBackgroundPageStyle)
@connect(mapStateToProps, { fetchProject })
class ProjectDetail extends Component {
  state = {
    title: '',
    thumbnail: '',
    live: '',
    source: '',
    usedTool: [],
    usedSkill: [],
    wireframe: [],
    sitemap: [],
    introduction: '',
    content: '',
  }

  componentDidMount = async () => {
    const { match: { params: { slug } } } = this.props;
    await this.props.fetchProject(slug);
    if (this.props.projects.length > 0) {
      this.setState(this.props.projects[0]);
    }
  }

  renderWireframe = () => this.state.wireframe.map((image, index) => (
      <div key={index}>
        <img
          src={`img/${image}`}
          className="project-carousel"
        />
      </div>
  ))

  renderSitemap = () => this.state.sitemap.map((image, index) => (
    <div key={index}>
      <img
        src={`img/${image}`}
        className="project-carousel"
      />
    </div>
  ))

  render() {
    const {
      title,
      thumbnail,
      live,
      source,
      usedTool,
      usedSkill,
      introduction,
      content,
    } = this.state;

    const { classes } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

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
        <Card>
          <CardBody>
          <GridContainer justify="center">
            <GridItem>
              <h1 className="project-title">{title}</h1>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <img src={`img/${thumbnail}`} className="project-image" />
            </GridItem>
            <GridItem xs={12} sm={12} md={6} className="project-info">
              <div className="project-skill">
                <p>Used Tools: {usedTool}</p>
                <p>Used Skill: {usedSkill}</p>
              </div>
              <hr className="project-line" />
              <div className="project-action">
                <Button color="info" size="lg" href={source}>
                    Source
                </Button>
                <Button color="info" size="lg" href={live}>
                    Live
                </Button>
              </div>
            </GridItem>
            <GridItem>
            <GridItem>
              <h2 className="project-title">Introduction</h2>
            </GridItem>
            <GridItem>
              <p>{introduction}</p>
            </GridItem>
            <Carousel {...settings} className={classes.projectCarousel}>
              {this.renderWireframe()}
            </Carousel>
            <Carousel {...settings} className={classes.projectCarousel}>
              {this.renderSitemap()}
            </Carousel>
            </GridItem>
            <GridItem>
              <h2 className="project-title">Detail</h2>
            </GridItem>
            <GridItem dangerouslySetInnerHTML={{ __html: content }} className="project-content" />
          </GridContainer>
          </CardBody>
        </Card>
      </div>
    </div>
    );
  }
}

export default ProjectDetail;
