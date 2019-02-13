import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import compression from 'compression';
import passport from 'passport';
import cookieSession from 'cookie-session';
import bluebird from 'bluebird';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import config from './src/back/config';
import auth from './src/back/service/auth';
import route from './src/back/route';

dotenv.config();

mongoose.Promise = bluebird;
mongoose.connect(config.database, {
  useCreateIndex: true,
  useNewUrlParser: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});
mongoose.connection.on('error', (error) => {
  console.log(error);
});

const app = express();
const port = process.env.PORT || 3000;

app.use(compression({ level: 9 }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000 * 12,
  keys: [config.secret],
}));
app.use(passport.initialize());
app.use(passport.session());

auth(passport);

app.use('/api', route);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, () => {
  console.log('Server Started');
});
