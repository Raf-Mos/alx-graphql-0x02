import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
