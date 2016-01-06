import { application, route } from 'arch-next';
import React from 'react';

/* Routes */
import ViewPostRoute from './routes/posts/view';

const routes = [
  route('/posts/:id', ViewPostRoute)
];

export default application({
  react: React,
  routes: routes
});
