import url from 'url';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import isomorphicFetch from 'isomorphic-fetch';

import * as config from './config';

const isBrowser = typeof window !== 'undefined';
let apolloClient: ApolloClient<any>;

const graphqlUrl = url.resolve(
  (config.server.apiBaseUrlOverride || config.shared.apiBaseUrl),
  (config.server.apiPathOverride || config.shared.apiPath),
);

const create = (initialState: any) =>
  new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: graphqlUrl,
      credentials: 'same-origin',
      fetch: isomorphicFetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });

export const initApollo = (initialState?: any) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};
