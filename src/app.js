/* eslint-disable no-console */
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import './utils/passport.config';
import allRouter from './routes/index';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

try {
  app.use('/api/v1', allRouter);
} catch (error) {
  console.log(error);
}

export default app;
