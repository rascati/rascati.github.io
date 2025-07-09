import { Helmet } from 'react-helmet-async';

const defaultTitle = 'Michael Rascati';
const defaultDescription = 'Web developer and designer in Boston, MA';
const defaultKeywords = ['Michael Rascati', 'web developer', 'designer', 'Boston'];

const DefaultSEO = () => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={defaultTitle}
    meta={[
      { name: 'description', content: defaultDescription },
      { name: 'keywords', content: defaultKeywords.join(', ') },
      // Add more default meta tags here if you want (Open Graph, Twitter, etc.)
    ]}
  />
);

export default DefaultSEO;
