import session from 'express-session';
import { SECRET_KEY } from '../config/config';

export default session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
});