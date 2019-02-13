import jwtDecode from 'jwt-decode';
import _ from 'lodash';

import returnQuery from '../service/query';
import Project from '../model/project';

const getUser = (req, res) => {
  const {
    projectId,
  } = req.params;
  const query = Project.findById(projectId).populate('user');
  query.exec((err, result) => {
    returnQuery(err, result.user, res);
  });
};

const listProject = (req, res) => {
  const query = Project.find({}).limit(10);
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

const addProject = (req, res) => {
  const {
    name, live, usedTool, usedSkill, introduction, body,
  } = req.body;

  const wireframeFilter = _.filter(req.files, o => o.fieldname === 'wireframe');
  const sitemapFilter = _.filter(req.files, o => o.fieldname === 'sitemap');
  const wireframe = wireframeFilter.map(({ filename }) => filename);
  const sitemap = sitemapFilter.map(({ filename }) => filename);

  const profile = jwtDecode(req.get('Authorization'));
  const newProject = new Project({
    name,
    live,
    usedTool,
    usedSkill,
    wireframe,
    sitemap,
    introduction,
    body,
    user: profile._id,
  });

  newProject.save((err, result) => {
    returnQuery(err, result, res);
  });
};

const viewProject = (req, res) => {
  const {
    projectId,
  } = req.params;
  const query = Project.findById(projectId);
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

const editProject = (req, res) => {
  const {
    projectId,
  } = req.params;
  const {
    title, tags, description, _user,
  } = req.body;
  const query = Project.findByIdAndUpdate(projectId, {
    title, tags, description, _user,
  });
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

const deleteProject = (req, res) => {
  const {
    projectId,
  } = req.params;
  const query = Project.findByIdAndDelete(projectId);
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

export {
  listProject,
  addProject,
  viewProject,
  editProject,
  deleteProject,
  getUser,
};
