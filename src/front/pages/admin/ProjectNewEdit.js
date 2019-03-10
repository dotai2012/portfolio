import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  InputAdornment, FormLabel, Icon, TextField,
} from '@material-ui/core';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';

import { toast } from 'react-toastify';
import Dropzone from '../../components/CustomDropzone/Dropzone';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import CustomInput from '../../components/CustomInput/CustomInput';

import fixedBackgroundPageStyle from '../../assets/jss/material-kit-react/views/fixedBackgroundPage.jsx';

import { postProject, fetchProject } from '../../actions';
import UploadAdapter from '../../services/uploadAdapter';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const mapStateToProps = ({ projects }) => ({
  projects,
});

const style = {
  label: {
    margin: '2rem 0',
  },
  textarea: {
    width: '100%',
  },
};

@withStyles({ ...fixedBackgroundPageStyle, ...style })
@connect(mapStateToProps, { postProject, fetchProject })
class ProjectNewEdit extends Component {
  state = {
    title: '',
    thumbnail: [],
    live: '',
    source: '',
    usedTool: [],
    usedSkill: [],
    wireframe: [],
    sitemap: [],
    introduction: '',
    content: '',
    thumbnailImageDropzone: [],
    wireframeImageDropzone: [],
    sitemapImageDropzone: [],
  }

  currentDrop = ''

  componentDidMount = async () => {
    const { location, match } = this.props;
    const { pathname } = location;
    if (pathname !== '/admin/new') {
      const { slug } = match.params;
      await this.props.fetchProject(slug);
      if (this.props.projects.length > 0) {
        Object.keys(this.props.projects[0]).map((key) => {
          if (key === 'usedTool' || key === 'usedSkill') {
            if (key === 'usedTool') {
              const usedTool = this.props.projects[0][key].map(oj => JSON.parse(oj));
              this.setState({ usedTool });
            }

            if (key === 'usedSkill') {
              const usedSkill = this.props.projects[0][key].map(oj => JSON.parse(oj));
              this.setState({ usedSkill });
            }
          } else {
            this.setState({ [key]: this.props.projects[0][key] });
          }
        });
        const thumbnailImageDropzone = [`img/${this.props.projects[0].thumbnail}`];
        const wireframeImageDropzone = this.props.projects[0].wireframe.map(image => `img/${image}`);
        const sitemapImageDropzone = this.props.projects[0].sitemap.map(image => `img/${image}`);

        this.setState({ thumbnailImageDropzone, wireframeImageDropzone, sitemapImageDropzone });
      }
    }
  }

  onGoBack = () => {
    this.props.history.goBack();
  }

  onSubmit = async () => {
    try {
      await this.props.postProject(this.state);
      toast.info('Hooray, a new project is created', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      this.props.history.push('/admin');
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

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDropClick = name => () => {
    this.currentDrop = name;
  }

  onDrop = (files) => {
    this.setState({ [this.currentDrop]: files });
  }

  onFileInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.files });
  }

  handleDeleteUsedTool = (i) => {
    const { usedTool } = this.state;
    this.setState({
      usedTool: usedTool.filter((tag, index) => index !== i),
    });
  }

  handleAdditionUsedTool = (tag) => {
    this.setState(state => ({ usedTool: [...state.usedTool, tag] }));
  }

  handleDragUsedTool = (tag, currPos, newPos) => {
    const usedTool = [...this.state.usedTool];
    const newTags = usedTool.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    this.setState({ usedTool: newTags });
  }

  handleDeleteUsedSkill = (i) => {
    const { usedSkill } = this.state;
    this.setState({
      usedSkill: usedSkill.filter((tag, index) => index !== i),
    });
  }

  handleAdditionUsedSkill = (tag) => {
    this.setState(state => ({ usedSkill: [...state.usedSkill, tag] }));
  }

  handleDragUsedSkill = (tag, currPos, newPos) => {
    const usedSkill = [...this.state.usedSkill];
    const newTags = usedSkill.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    this.setState({ usedSkill: newTags });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h4>Add New / Edit Project</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Project Name"
                        id="title"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          name: 'title',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                arrow_forward
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.title,
                          onChange: this.onInputChange,
                        }}
                      />
                      <FormLabel component="legend" className={classes.label}>Thumbnail Image</FormLabel>
                      <Dropzone onDrop={this.onDrop} multiple={false} onClick={this.onDropClick('thumbnail')} thumbs={this.state.thumbnailImageDropzone}>
                            {({ getRootProps, getInputProps, isDragActive }) => (
                                <div
                                  {...getRootProps()}
                                  className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                                >
                                  <input {...getInputProps()} />
                                  {
                                    isDragActive
                                      ? <p>Drop files here...</p>
                                      : <p>Try dropping some files here, or click to select files to upload.</p>
                                  }
                                </div>
                            )}
                      </Dropzone>
                      <CustomInput
                        labelText="Live Site"
                        id="live"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          name: 'live',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                              live_tv
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.live,
                          onChange: this.onInputChange,
                        }}
                      />
                      <CustomInput
                        labelText="Source Code"
                        id="source"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          name: 'source',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                code
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.source,
                          onChange: this.onInputChange,
                        }}
                      />
                      <FormLabel component="legend" className={classes.label}>Used Tools</FormLabel>
                      <ReactTags tags={this.state.usedTool}
                      handleDelete={this.handleDeleteUsedTool}
                      handleAddition={this.handleAdditionUsedTool}
                      handleDrag={this.handleDragUsedTool}
                      delimiters={delimiters} />

                      <FormLabel component="legend" className={classes.label}>Used Skills</FormLabel>
                      <ReactTags tags={this.state.usedSkill}
                      handleDelete={this.handleDeleteUsedSkill}
                      handleAddition={this.handleAdditionUsedSkill}
                      handleDrag={this.handleDragUsedSkill}
                      delimiters={delimiters} />

                      <FormLabel component="legend" className={classes.label}>Introduction</FormLabel>
                      <TextField
                        className={classes.textarea}
                        name="introduction"
                        placeholder="Describe briefly about the project"
                        multiline={true}
                        rows={4}
                        rowsMax={6}
                        variant="outlined"
                        value={this.state.introduction}
                        onChange={this.onInputChange}
                      />
                      <FormLabel component="legend" className={classes.label}>Wireframe Images</FormLabel>
                      <Dropzone onDrop={this.onDrop} onClick={this.onDropClick('wireframe')} thumbs={this.state.wireframeImageDropzone}>
                            {({ getRootProps, getInputProps, isDragActive }) => (
                                <div
                                  {...getRootProps()}
                                  className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                                >
                                  <input {...getInputProps()} />
                                  {
                                    isDragActive
                                      ? <p>Drop files here...</p>
                                      : <p>Try dropping some files here, or click to select files to upload.</p>
                                  }
                                </div>
                            )}
                      </Dropzone>
                      <FormLabel component="legend" className={classes.label}>Sitemap Images</FormLabel>
                      <Dropzone onDrop={this.onDrop} onClick={this.onDropClick('sitemap')} thumbs={this.state.sitemapImageDropzone}>
                            {({ getRootProps, getInputProps, isDragActive }) => (
                                <div
                                  {...getRootProps()}
                                  className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                                >
                                  <input {...getInputProps()} />
                                  {
                                    isDragActive
                                      ? <p>Drop files here...</p>
                                      : <p>Try dropping some files here, or click to select files to upload.</p>
                                  }
                                </div>
                            )}
                      </Dropzone>
                      <FormLabel component="legend" className={classes.label}>Content</FormLabel>
                      <CKEditor
                          editor={ ClassicEditor }
                          name="content"
                          data={this.state.content}
                          onInit={ (editor) => {
                            editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
                              return new UploadAdapter(loader);
                            };
                          } }
                          onChange={ (event, editor) => {
                            const data = editor.getData();
                            this.setState({ content: data });
                          } }
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="info" size="lg" onClick={this.onGoBack}>
                        Go Back
                      </Button>
                      <Button simple color="info" size="lg" onClick={this.onSubmit}>
                        Post Project
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
    );
  }
}

export default ProjectNewEdit;
