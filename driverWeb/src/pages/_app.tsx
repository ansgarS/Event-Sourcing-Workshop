import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { withApolloClient } from '../withApolloClient';

import '../App.less';

class CustomNextApp extends App<any> {
  render () {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(CustomNextApp);
