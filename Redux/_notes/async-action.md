# Sync Actions
As soon as an action was dispateched, the state was immediately updated.

# Async Actions
Fetche data from API and store it in redux store.

 
## State
```
  state = {
    loading: true,
    data: [],
    error: ''
  }
```

## Actions
- FETCH
- FETCH_SUCCESS
- FETCH_FAILURE

## Reducer
- FETCH : set loading to true
- FETCH_SUCCESS: set loading to false and set data
- FETCH_FAILURE: set loading to false and set error


