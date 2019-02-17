import jwtDecode from 'jwt-decode';
import _ from 'lodash';

import returnQuery from '../service/query';
import Project from '../model/project';

const getUser = (req, res) => {
  const {
    slug,
  } = req.params;
  const query = Project.findById({ slug }).populate('user');
  query.exec((err, result) => {
    returnQuery(err, result.user, res);
  });
};

const listProject = (req, res) => {
  const query = Project.find({});
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

const addProject = (req, res) => {
  const {
    title, live, source, usedTool, usedSkill, introduction, body,
  } = req.body;

  const thumbnailFilter = _.filter(req.files, o => o.fieldname === 'thumbnail');
  const wireframeFilter = _.filter(req.files, o => o.fieldname === 'wireframe');
  const sitemapFilter = _.filter(req.files, o => o.fieldname === 'sitemap');

  const thumbnail = thumbnailFilter.map(({ filename }) => filename);
  const wireframe = wireframeFilter.map(({ filename }) => filename);
  const sitemap = sitemapFilter.map(({ filename }) => filename);

  const profile = jwtDecode(req.get('Authorization'));
  const newProject = new Project({
    title,
    thumbnail,
    live,
    source,
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
    slug,
  } = req.params;
  const query = Project.findOne({ slug });
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

const editProject = (req, res) => {
  const {
    slug,
  } = req.params;
  const {
    title, tags, description, _user,
  } = req.body;
  const query = Project.findOneAndUpdate({ slug }, {
    title, tags, description, _user,
  });
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

const deleteProject = (req, res) => {
  const {
    slug,
  } = req.params;
  const query = Project.findOneAndDelete({ slug });
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
