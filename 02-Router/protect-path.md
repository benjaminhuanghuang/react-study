
# 5.0
```
<Routes>
  <ProtectedRoute path="/protected" element={<ProtectedPage />} />
</Routes>

```



# 6.0
https://www.robinwieruch.de/react-router-private-routes/

```
<Route
    path="home"
    element={
      <ProtectedRoute user={user}>
        <Home />
      </ProtectedRoute>
    }
  />
```