import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import { Email, ArrowRightAlt } from '@material-ui/icons';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Dropzone from '../../components/CustomDropzone/Dropzone';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import CustomInput from '../../components/CustomInput/CustomInput';

import loginPageStyle from '../../assets/jss/material-kit-react/views/loginPage.jsx';
import { postProject, fetchProject } from '../../actions';

const mapStateToProps = ({ projects }) => ({
  projects,
});

@withStyles(loginPageStyle)
@connect(mapStateToProps, { postProject, fetchProject })
class ProjectNewEdit extends Component {
  state = {
    title: '',
    thumbnail: [],
    live: '',
    souce: '',
    usedTool: '',
    usedSkill: '',
    wireframe: [],
    sitemap: [],
    introduction: '',
    body: '',
  }

  currentDrop = ''

  componentDidMount = () => {
    const { location, match } = this.props;
    const { pathname } = location;
    if (pathname !== '/admin/new') {
      const { id } = match.params;
      this.props.fetchProject(id, () => {
        if (this.props.projects.length > 0) {
          this.setState(this.props.projects[0]);
        }
      });
    }
  }

  onSubmit = async () => {
    this.props.postProject(this.state);
    // this.props.history.push('/admin');
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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
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
                              <ArrowRightAlt className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          value: this.state.title,
                          onChange: this.onInputChange,
                        }}
                      />
                      <Dropzone onDrop={this.onDrop} multiple={false} onClick={this.onDropClick('thumbnail')}>
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
                                lock_outline
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
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.source,
                          onChange: this.onInputChange,
                        }}
                      />
                      <CustomInput
                        labelText="Used Tools"
                        id="usedTool"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          name: 'usedTool',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.usedTool,
                          onChange: this.onInputChange,
                        }}
                      />
                      <CustomInput
                        labelText="Used Skills"
                        id="usedSkill"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          name: 'usedSkill',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.usedSkill,
                          onChange: this.onInputChange,
                        }}
                      />
                      <CKEditor
                          editor={ ClassicEditor }
                          name="introduction"
                          data={this.state.introduction}
                          onInit={ (editor) => {
                            console.log('Editor is ready to use!', editor);
                          } }
                          onChange={ (event, editor) => {
                            const data = editor.getData();
                            this.setState({ introduction: data });
                            console.log({ event, editor, data });
                          } }
                          onBlur={ (editor) => {
                            console.log('Blur.', editor);
                          } }
                          onFocus={ (editor) => {
                            console.log('Focus.', editor);
                          } }
                      />
                      <Dropzone onDrop={this.onDrop} onClick={this.onDropClick('wireframe')}>
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
                      <Dropzone onDrop={this.onDrop} onClick={this.onDropClick('sitemap')}>
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
                      <CKEditor
                          editor={ ClassicEditor }
                          name="body"
                          data={this.state.body}
                          onInit={ (editor) => {
                            console.log('Editor is ready to use!', editor);
                          } }
                          onChange={ (event, editor) => {
                            const data = editor.getData();
                            this.setState({ body: data });
                            console.log({ event, editor, data });
                          } }
                          onBlur={ (editor) => {
                            console.log('Blur.', editor);
                          } }
                          onFocus={ (editor) => {
                            console.log('Focus.', editor);
                          } }
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={this.onSubmit}>
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
