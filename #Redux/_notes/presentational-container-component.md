
# Presentational Components vs Container Components
- https://redux.js.org/basics/usage-with-react

  


|                  | Presentational Components         |      Container Components     |
|------------------|-----------------------------------|:---------------------------------------------:|
|Purpose           | How things look (markup, styles)  | How things work (data fetching, state updates) |
|Aware of Redux    | NO                                | Yes
|To read data	     | Read data from props	             | Subscribe to Redux state
|To change data    | Invoke callbacks from props	     | Dispatch Redux actions
|Are written	     | By hand	                         | Usually generated by React Redux

