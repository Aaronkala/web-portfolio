import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ title, name }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Software engineer interested in everything tech."
      />
      <meta property="og:url" content="https://aaronhakala.com/" />
      <meta property="og:site_name" content={name} />
    </Helmet>
  );
};
