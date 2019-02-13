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
};

@withStyles(style)
class ProjectCard extends React.Component {
  render() {
    const {
      classes, title, image, children, toLive, toSource, toMore,
    } = this.props;
    return (
      <Card style={{ width: '20rem' }}>
        <img
          style={{ height: '180px', width: '100%', display: 'block' }}
          className={classes.imgCardTop}
          src={image}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>{title}</h4>
          <p>{children}</p>
          <a href={toLive} target="_blank" rel="noopener noreferrer">Live</a>
          <a href={toSource} target="_blank" rel="noopener noreferrer">Source Code</a>
          <Link to={toMore}>View More</Link>
        </CardBody>
      </Card>
    );
  }
}

export default ProjectCard;
