import { Helmet } from 'react-helmet-async';


interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
}

const SEO = ({
  title,
  description = '',
  keywords = [],
  lang = 'en',
  meta = [],
}: SEOProps) => {
  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    ...meta,
  ];

  return <Helmet htmlAttributes={{ lang }} title={title} meta={metaTags} />;
};

export default SEO;

// const SEO: FC<SEOProps> = ({ description, lang, meta, keywords, title }) => (
//   <div>seo base</div>
//   // <StaticQuery
//   //   query={detailsQuery}
//   //   render={data => {
//   //     const metaDescription = description || data.site.siteMetadata.description;

//   //     return (
//   //       <Helmet
//   //         htmlAttributes={{ lang }}
//   //         title={title}
//   //         titleTemplate={`%s | ${data.site.siteMetadata.title}`}
//   //         meta={[
//   //           { name: `description`, content: metaDescription },
//   //           { property: `og:title`, content: title },
//   //           { property: `og:description`, content: metaDescription },
//   //           { property: `og:type`, content: `website` },
//   //           { name: `twitter:card`, content: `summary` },
//   //           { name: `twitter:creator`, content: data.site.siteMetadata.author },
//   //           { name: `twitter:title`, content: title },
//   //           { name: `twitter:description`, content: metaDescription },
//   //         ]
//   //           .concat(keywords.length > 0
//   //             ? { name: `keywords`, content: keywords.join(`, `) }
//   //             : []
//   //           )
//   //           .concat(meta)}
//   //       />
//   //     );

//   //   }}
//   // />
// );


// // SEO.defaultProps = {
// //   lang: `en`,
// //   meta: [],
// //   keywords: [],
// // }

// // SEO.propTypes = {
// //   description: PropTypes.string,
// //   lang: PropTypes.string,
// //   meta: PropTypes.array,
// //   keywords: PropTypes.arrayOf(PropTypes.string),
// //   title: PropTypes.string.isRequired,
// // }

// export default SEO;

// // const detailsQuery = graphql`
// //   query DefaultSEOQuery {
// //     site {
// //       siteMetadata {
// //         title
//         description
//         author
//       }
//     }
//   }
// `;
