/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-session */ "cookie-session");
/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_session__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bluebird */ "bluebird");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_back_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/back/config */ "./src/back/config/index.js");
/* harmony import */ var _src_back_service_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/back/service/auth */ "./src/back/service/auth.js");
/* harmony import */ var _src_back_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/back/route */ "./src/back/route/index.js");













dotenv__WEBPACK_IMPORTED_MODULE_9___default.a.config();
mongoose__WEBPACK_IMPORTED_MODULE_8___default.a.Promise = bluebird__WEBPACK_IMPORTED_MODULE_7___default.a;
mongoose__WEBPACK_IMPORTED_MODULE_8___default.a.connect(_src_back_config__WEBPACK_IMPORTED_MODULE_10__["default"].database, {
  useCreateIndex: true,
  useNewUrlParser: true
});
mongoose__WEBPACK_IMPORTED_MODULE_8___default.a.connection.on('connected', function () {
  console.log('Connected to database');
});
mongoose__WEBPACK_IMPORTED_MODULE_8___default.a.connection.on('error', function (error) {
  console.log(error);
});
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var port = process.env.PORT || 3000;
app.use(compression__WEBPACK_IMPORTED_MODULE_4___default()({
  level: 9
}));
app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({
  extended: false
}));
app.use(cookie_session__WEBPACK_IMPORTED_MODULE_6___default()({
  maxAge: 24 * 60 * 60 * 1000 * 12,
  keys: [_src_back_config__WEBPACK_IMPORTED_MODULE_10__["default"].secret]
}));
app.use(passport__WEBPACK_IMPORTED_MODULE_5___default.a.initialize());
app.use(passport__WEBPACK_IMPORTED_MODULE_5___default.a.session());
Object(_src_back_service_auth__WEBPACK_IMPORTED_MODULE_11__["default"])(passport__WEBPACK_IMPORTED_MODULE_5___default.a);
app.use('/api', _src_back_route__WEBPACK_IMPORTED_MODULE_12__["default"]);
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, 'public')));
app.get('*', function (req, res) {
  res.sendFile(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, 'index.html'));
});
app.listen(port, function () {
  console.log('Server Started');
});

/***/ }),

/***/ "./src/back/config/dev.js":
/*!********************************!*\
  !*** ./src/back/config/dev.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  database: 'mongodb://localhost:27017/portfolio',
  secret: 'Godisagirl2012'
});

/***/ }),

/***/ "./src/back/config/index.js":
/*!**********************************!*\
  !*** ./src/back/config/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var result;

if (false) {} else {
  result = __webpack_require__(/*! ./dev */ "./src/back/config/dev.js");
}

/* harmony default export */ __webpack_exports__["default"] = (result.default);

/***/ }),

/***/ "./src/back/controller/message.js":
/*!****************************************!*\
  !*** ./src/back/controller/message.js ***!
  \****************************************/
/*! exports provided: listMessage, addMessage, viewMessage, deleteMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMessage", function() { return listMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewMessage", function() { return viewMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMessage", function() { return deleteMessage; });
/* harmony import */ var _service_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/query */ "./src/back/service/query.js");
/* harmony import */ var _model_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/message */ "./src/back/model/message.js");



var listMessage = function listMessage(req, res) {
  var query = _model_message__WEBPACK_IMPORTED_MODULE_1__["default"].find({});
  query.exec(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_0__["default"])(err, result, res);
  });
};

var addMessage = function addMessage(req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      name = _req$body.name,
      email = _req$body.email,
      body = _req$body.body;
  var newMessage = new _model_message__WEBPACK_IMPORTED_MODULE_1__["default"]({
    title: title,
    name: name,
    email: email,
    body: body
  });
  newMessage.save(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_0__["default"])(err, result, res);
  });
};

var viewMessage = function viewMessage(req, res) {
  var slug = req.params.slug;
  var query = _model_message__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    slug: slug
  });
  query.exec(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_0__["default"])(err, result, res);
  });
};

var deleteMessage = function deleteMessage(req, res) {
  var slug = req.params.slug;
  var query = _model_message__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndDelete({
    slug: slug
  });
  query.exec(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_0__["default"])(err, result, res);
  });
};



/***/ }),

/***/ "./src/back/controller/project.js":
/*!****************************************!*\
  !*** ./src/back/controller/project.js ***!
  \****************************************/
/*! exports provided: listProject, addProject, viewProject, editProject, deleteProject, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listProject", function() { return listProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewProject", function() { return viewProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProject", function() { return editProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/query */ "./src/back/service/query.js");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/project */ "./src/back/model/project.js");





var getUser = function getUser(req, res) {
  var slug = req.params.slug;
  var query = _model_project__WEBPACK_IMPORTED_MODULE_3__["default"].findById({
    slug: slug
  }).populate('user');
  query.exec(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_2__["default"])(err, result.user, res);
  });
};

var listProject = function listProject(req, res) {
  var query = _model_project__WEBPACK_IMPORTED_MODULE_3__["default"].find({});
  query.exec(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_2__["default"])(err, result, res);
  });
};

var addProject = function addProject(req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      live = _req$body.live,
      source = _req$body.source,
      usedTool = _req$body.usedTool,
      usedSkill = _req$body.usedSkill,
      introduction = _req$body.introduction,
      body = _req$body.body;

  var thumbnailFilter = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(req.files, function (o) {
    return o.fieldname === 'thumbnail';
  });

  var wireframeFilter = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(req.files, function (o) {
    return o.fieldname === 'wireframe';
  });

  var sitemapFilter = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(req.files, function (o) {
    return o.fieldname === 'sitemap';
  });

  var thumbnail = thumbnailFilter.map(function (_ref) {
    var filename = _ref.filename;
    return filename;
  });
  var wireframe = wireframeFilter.map(function (_ref2) {
    var filename = _ref2.filename;
    return filename;
  });
  var sitemap = sitemapFilter.map(function (_ref3) {
    var filename = _ref3.filename;
    return filename;
  });
  var profile = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(req.get('Authorization'));
  var newProject = new _model_project__WEBPACK_IMPORTED_MODULE_3__["default"]({
    title: title,
    thumbnail: thumbnail,
    live: live,
    source: source,
    usedTool: usedTool,
    usedSkill: usedSkill,
    wireframe: wireframe,
    sitemap: sitemap,
    introduction: introduction,
    body: body,
    user: profile._id
  });
  newProject.save(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_2__["default"])(err, result, res);
  });
};

var viewProject = function viewProject(req, res) {
  var slug = req.params.slug;
  var query = _model_project__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
    slug: slug
  });
  query.exec(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_2__["default"])(err, result, res);
  });
};

var editProject = function editProject(req, res) {
  var slug = req.params.slug;
  var _req$body2 = req.body,
      title = _req$body2.title,
      tags = _req$body2.tags,
      description = _req$body2.description,
      _user = _req$body2._user;
  var query = _model_project__WEBPACK_IMPORTED_MODULE_3__["default"].findOneAndUpdate({
    slug: slug
  }, {
    title: title,
    tags: tags,
    description: description,
    _user: _user
  });
  query.exec(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_2__["default"])(err, result, res);
  });
};

var deleteProject = function deleteProject(req, res) {
  var slug = req.params.slug;
  var query = _model_project__WEBPACK_IMPORTED_MODULE_3__["default"].findOneAndDelete({
    slug: slug
  });
  query.exec(function (err, result) {
    Object(_service_query__WEBPACK_IMPORTED_MODULE_2__["default"])(err, result, res);
  });
};



/***/ }),

/***/ "./src/back/controller/user.js":
/*!*************************************!*\
  !*** ./src/back/controller/user.js ***!
  \*************************************/
/*! exports provided: registerUser, loginUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user */ "./src/back/model/user.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/back/config/index.js");
/* harmony import */ var _service_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/query */ "./src/back/service/query.js");







var registerUser = function registerUser(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password;
  var newUser = new _model_user__WEBPACK_IMPORTED_MODULE_3__["default"]({
    name: name,
    email: email,
    password: password
  });
  bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(newUser.password, 10, function (err, hash) {
    newUser.password = hash;
    newUser.save(function (error) {
      if (error) {
        res.json({
          success: false,
          msg: 'Failed to create user',
          debug: err
        });
      } else {
        res.json({
          success: true,
          msg: 'Created user'
        });
      }
    });
  });
};

var loginUser = function loginUser(req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  _model_user__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
    email: email
  }, function (err, userFound) {
    if (err) throw err;

    if (!userFound) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }

    bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, userFound.password, function (err, isMatch) {
      if (err) throw err;

      if (isMatch) {
        var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(userFound.toJSON(), _config__WEBPACK_IMPORTED_MODULE_4__["default"].secret, {
          expiresIn: 604800
        });
        res.json({
          success: true,
          msg: 'User found',
          token: "Bearer ".concat(token),
          user: {
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            admin: userFound.admin
          }
        });
      } else {
        return res.json({
          success: false,
          msg: 'Wrong password'
        });
      }
    });
  });
};

var deleteUser = function deleteUser(req, res) {
  var profile = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(req.get('Authorization'));
  _model_user__WEBPACK_IMPORTED_MODULE_3__["default"].findById(profile._id).exec(function (err, result) {
    result.remove();
    Object(_service_query__WEBPACK_IMPORTED_MODULE_5__["default"])(err, result, res);
  });
};



/***/ }),

/***/ "./src/back/model/message.js":
/*!***********************************!*\
  !*** ./src/back/model/message.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose_slug_updater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-slug-updater */ "mongoose-slug-updater");
/* harmony import */ var mongoose_slug_updater__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_slug_updater__WEBPACK_IMPORTED_MODULE_1__);


mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.plugin(mongoose_slug_updater__WEBPACK_IMPORTED_MODULE_1___default.a);
var messageSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    slug: 'title'
  }
});
var message = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Message', messageSchema);
/* harmony default export */ __webpack_exports__["default"] = (message);

/***/ }),

/***/ "./src/back/model/project.js":
/*!***********************************!*\
  !*** ./src/back/model/project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose_slug_updater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-slug-updater */ "mongoose-slug-updater");
/* harmony import */ var mongoose_slug_updater__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_slug_updater__WEBPACK_IMPORTED_MODULE_1__);


mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.plugin(mongoose_slug_updater__WEBPACK_IMPORTED_MODULE_1___default.a);
var projectSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  live: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  usedTool: {
    type: String,
    required: true
  },
  usedSkill: {
    type: String,
    required: true
  },
  wireframe: {
    type: Array,
    required: true
  },
  sitemap: {
    type: Array,
    required: true
  },
  introduction: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    slug: 'title'
  },
  user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
projectSchema.post('save', function (doc) {
  var User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User');
  User.findByIdAndUpdate(doc.user, {
    $push: {
      project: doc._id
    }
  }).exec();
});
projectSchema.post('remove', function (doc) {
  var User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User');
  User.findByIdAndUpdate(doc.user, {
    $pull: {
      project: doc._id
    }
  }).exec();
});
var project = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Project', projectSchema);
/* harmony default export */ __webpack_exports__["default"] = (project);

/***/ }),

/***/ "./src/back/model/user.js":
/*!********************************!*\
  !*** ./src/back/model/user.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var userSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  project: [{
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'Project'
  }]
});
userSchema.virtual('projectCount').get(function () {
  return this.project.length;
});
userSchema.post('remove', function (doc) {
  var Project = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Project');
  Project.deleteMany({
    _id: {
      $in: doc.project
    }
  }).exec();
});
var user = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./src/back/route/index.js":
/*!*********************************!*\
  !*** ./src/back/route/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/back/route/user.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/back/route/project.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./src/back/route/message.js");




var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
router.use('/user', _user__WEBPACK_IMPORTED_MODULE_1__["default"]);
router.use('/project', _project__WEBPACK_IMPORTED_MODULE_2__["default"]);
router.use('/message', _message__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/back/route/message.js":
/*!***********************************!*\
  !*** ./src/back/route/message.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/message */ "./src/back/controller/message.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
router.route('/').get(passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), _controller_message__WEBPACK_IMPORTED_MODULE_2__["listMessage"]).post(_controller_message__WEBPACK_IMPORTED_MODULE_2__["addMessage"]);
router.route('/:slug').get(passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), _controller_message__WEBPACK_IMPORTED_MODULE_2__["viewMessage"]).delete(passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), _controller_message__WEBPACK_IMPORTED_MODULE_2__["deleteMessage"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/back/route/project.js":
/*!***********************************!*\
  !*** ./src/back/route/project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controller_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/project */ "./src/back/controller/project.js");




var storage = multer__WEBPACK_IMPORTED_MODULE_2___default.a.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'public/img/');
  },
  filename: function filename(req, file, cb) {
    cb(null, "-".concat(Date.now()).concat(file.originalname));
  }
});
var upload = multer__WEBPACK_IMPORTED_MODULE_2___default()({
  storage: storage
});
var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
router.route('/').get(passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), _controller_project__WEBPACK_IMPORTED_MODULE_3__["listProject"]).post(passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), upload.any(), _controller_project__WEBPACK_IMPORTED_MODULE_3__["addProject"]);
router.route('/:slug').get(passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), _controller_project__WEBPACK_IMPORTED_MODULE_3__["viewProject"]).put(passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), _controller_project__WEBPACK_IMPORTED_MODULE_3__["editProject"]).delete(passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), _controller_project__WEBPACK_IMPORTED_MODULE_3__["deleteProject"]);
router.get('/:slug/user', passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {
  session: false
}), _controller_project__WEBPACK_IMPORTED_MODULE_3__["getUser"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/back/route/user.js":
/*!********************************!*\
  !*** ./src/back/route/user.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/user */ "./src/back/controller/user.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router(); // router.post('/register', registerUser); Disable

router.post('/login', _controller_user__WEBPACK_IMPORTED_MODULE_2__["loginUser"]); // router.delete('/', passport.authenticate('jwt', { session: false }), deleteUser); // Disable

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/back/service/auth.js":
/*!**********************************!*\
  !*** ./src/back/service/auth.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/back/model/user.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/back/config/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function (passport) {
  var opts = {
    jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_0__["ExtractJwt"].fromAuthHeaderAsBearerToken(),
    secretOrKey: _config__WEBPACK_IMPORTED_MODULE_2__["default"].secret
  };
  passport.use(new passport_jwt__WEBPACK_IMPORTED_MODULE_0__["Strategy"](opts, function (jwtPayload, done) {
    _model_user__WEBPACK_IMPORTED_MODULE_1__["default"].findById(jwtPayload._id, function (err, user) {
      if (err) {
        return done(err, false);
      }

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    });
  }));
});

/***/ }),

/***/ "./src/back/service/query.js":
/*!***********************************!*\
  !*** ./src/back/service/query.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var returnQuery = function returnQuery(err, result, res) {
  if (err) {
    res.status(400).json({
      success: false,
      msg: 'Something wrong',
      debug: err
    });
  } else {
    res.json({
      success: true,
      msg: result
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (returnQuery);

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-slug-updater":
/*!****************************************!*\
  !*** external "mongoose-slug-updater" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-slug-updater");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map