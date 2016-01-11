import { application, route } from 'arch-next';

/* Routes */
import ViewPostRoute from './routes/posts/view';

const routes = [
  route('/posts/:id', ViewPostRoute)
];

export default application({
  domRoot: "my-blog",
  routes: routes
});
