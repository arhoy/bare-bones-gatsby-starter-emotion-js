import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../hooks/SEO';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="My Emotion JS Barebones Starter Tempalte"
        description="This is a starter template that uses the barebones popular default starter with the addition of Emotion JS, Google Fonts, Google Analytics with an example SEO Hooks and starter Layout.js file"
      />
      <h1>Gatsby With Emotion.js</h1>
      <p>Welcome to the Gatsby Starter File with Emotion JS</p>
    </Layout>
  );
};

export default IndexPage;
