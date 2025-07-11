
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    {/* <SEO title='404: Not found' /> */}
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... <Link to='/'>Go home</Link> :)</p>
  </Layout>
);

export default NotFoundPage;
