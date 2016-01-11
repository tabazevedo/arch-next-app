import "./global.css";
import { application, route } from 'arch-next';
import loremIpsum from 'lorem-ipsum';

/* Routes */
import ViewPostRoute from './routes/posts/view';

const routes = [
  route('/posts/:id', ViewPostRoute)
];

export default application({
  async getInitialState() {
    return {
      author: "Albert Einstein",
      body: loremIpsum({ count: 5, units: 'paragraphs' }),
      title: "The general theory of relativity",
      comments: [
        {
          author: 'Steve',
          body: 'Hello, great post!'
        }
      ]
    }
  },
  domRoot: "my-blog",
  routes: routes
});
