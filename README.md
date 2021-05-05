# Node.js MongoDB – User Authentication & Authorization example with JWT & Mongoose
We will build a Node.js Express application in that:

1. User can signup new account, or login with username & password.

5. By role (admin, moderator, user), the User has access to protected resources or not.

For more detail, please visit:
> [Node.js + MongoDB: User Authentication & Authorization with JWT](https://bezkoder.com/node-js-mongodb-auth-jwt/)

Working with Front-end:
> [Vue.js JWT Authentication with Vuex and Vue Router](https://bezkoder.com/jwt-vue-vuex-authentication/)

> [Angular 8 JWT Authentication example](https://bezkoder.com/angular-jwt-authentication/)

> [Angular 10 JWT Authentication example](https://bezkoder.com/angular-10-jwt-auth/)

> [Angular 11 JWT Authentication example](https://bezkoder.com/angular-11-jwt-auth/)

> [React JWT Authentication & Authorization (without Redux) example](https://bezkoder.com/react-jwt-auth/)

> [React Redux JWT Authentication & Authorization example](https://bezkoder.com/react-redux-jwt-auth/)

Integration on same Server/Port:
> [Integrate Angular 8 with Node.js Express](https://bezkoder.com/integrate-angular-8-node-js/)

> [Integrate Angular 10 with Node.js Express](https://bezkoder.com/integrate-angular-10-node-js/)

> [Integrate React with Node.js Express](https://bezkoder.com/integrate-react-express-same-server-port/)

## Project setup
```
npm install
```

### Run
```
node server.js
```



### API ROUTES
A legal JWT must be added to HTTP x-access-token Header if Client accesses protected resources.

| METHODS       | URLS             | ACTIONS                    |
| ------------- |:--------------:  | :-------------------------:|
| POST          | /api/auth/signup | signup new account         |
| POST          | /api/auth/signin | login an account           |
| GET           | /api/test/all    | retrieve public content    |
| GET           | /api/test/user   | access User’s content      |
| GET           | /api/test/mod    | access Moderator’s content |
| GET           | /api/test/admin  | access Admin’s content     |


"# api-rest-nodejs-jwt-auth-no-email-verification" 
"# api-rest-nodejs-jwt-auth-no-email-verification" 
