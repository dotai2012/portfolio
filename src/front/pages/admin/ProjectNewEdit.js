import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import { Email, ArrowRightAlt } from '@material-ui/icons';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { connect } from 'react-redux';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import CustomInput from '../../components/CustomInput/CustomInput';

import loginPageStyle from '../../assets/jss/material-kit-react/views/loginPage.jsx';
import { postProject } from '../../actions';

@withStyles(loginPageStyle)
@connect(null, { postProject })
class ProjectNewEdit extends Component {
  state = {
    name: '',
    live: '',
    usedTool: '',
    usedSkill: '',
    wireframe: [],
    sitemap: [],
    introduction: '',
    body: '',
  }

  onSubmit = () => {
    this.props.postProject(this.state);
    // this.props.history.push('/admin');
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFileInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.files });
    console.log(this.state);
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
                        id="name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          name: 'projectName',
                          endAdornment: (
                            <InputAdornment position="end">
                              <ArrowRightAlt className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          value: this.state.name,
                          onChange: this.onInputChange,
                        }}
                      />
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
                      <Button
                        variant="contained"
                        component="label"
                      >
                        Upload Wireframe Images
                        <input
                          type="file"
                          name="wireframe"
                          multiple
                          className={classes.inputHidden}
                          onChange={this.onFileInputChange}
                        />
                      </Button>
                      <Button
                        variant="contained"
                        component="label"
                      >
                        Upload Sitemap Image
                        <input
                          type="file"
                          name="sitemap"
                          multiple
                          className={classes.inputHidden}
                          onChange={this.onFileInputChange}
                        />
                      </Button>
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
