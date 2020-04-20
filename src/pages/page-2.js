import React from 'react';

import SEO from '../hooks/SEO';
import Layout from '../layouts/Layout';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Layout>
);

export default SecondPage;
