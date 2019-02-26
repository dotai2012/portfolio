import React from 'react';
// material-ui components
import { withStyles } from '@material-ui/core/styles';
// core components
import { Link } from 'react-router-dom';
import imagesStyles from '../../assets/jss/material-kit-react/imagesStyles.jsx';
import { cardTitle } from '../../assets/jss/material-kit-react.jsx';
import Card from './Card';
import CardBody from './CardBody';

const style = {
  ...imagesStyles,
  cardTitle,
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
};

const inlineStyle = {
  img: {
    height: '180px', width: '100%', display: 'block', objectFit: 'cover',
  },
};

@withStyles(style)
class ProjectCard extends React.Component {
  render() {
    const {
      classes, title, image, children, live, source, more,
    } = this.props;
    return (
      <Card>
        <img
          style={inlineStyle.img}
          className={classes.imgCardTop}
          src={image}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>{title}</h4>
          <p>{children}</p>
          <div className={classes.linkContainer}>
            <a href={live} target="_blank" rel="noopener noreferrer">Live</a>
            <a href={source} target="_blank" rel="noopener noreferrer">Source Code</a>
            <Link to={more}>View More</Link>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default ProjectCard;
