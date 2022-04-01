# React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios [2022]
- https://www.youtube.com/watch?v=nI8PYZNFtac&t=1472s&ab_channel=DaveGray
- https://github.com/gitdagray/react_jwt_auth

After i log in we'll see the `auth state` in the console.
In the state you can see i have a username a password some user roles and i have an `access token`. 
```
{
  accessToken: "",
  pwd:''
  roles: [123, 345],
  user: ''
}
```
I also received a `refresh token` but it's not stored in local storage and it's not in the auth state and javascript cannot even access it but when it's needed axios will send it back
to the server when i request data.

## JWT (json web token)
After login, api issue the client an `access token` and a `refersh token`
access token is shorttime (10 mins) and refresh token is given longer duration (hours, days)

client stores access token in memory NOT in local storage or cookie. to React app, acess token can be stored in state.

Api will issue refresh token in http only cookie. Not accessible var javascript, refresh token do need to have an exiration date, which will then require login again.
Refresh token should not have the ability to issue new refresh token. 以防refresh token被窃取后可以一直使用(indefinite access)
   


1. API issuing an `access token` and `refresh token` during user authorization

2. Client application can then access our rest api's protected routes with the `access token` until it expires

3. API will verify the `access token` with `middleware` every time the access token is used to make a request.

4. when the access token expire the user's application will need to send `refresh token` request to API's refresh endpoint to get a new `access token`. Rest API's refresh endpoint will verify the token and cross-reference the refresh token in database too. 

Storing a reference to the refresh token in the database will allow refresh tokens to be terminated early if the user decides to log out. Refresh tokens need to be allowed to expire so indefinite access cannot be gained.




  
  
 