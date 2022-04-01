
## Setup
```
  npm i graphql @apollo/client
```
index.js
```
  import {ApolloClient, ApolloProvider, InmemoryCache} from '@apollo/client'

  const client = new ApolloClient({
    uri: URL,
    cache: new InmemoryCache()
  })

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
``` 