

## Debug react
Create react app using create-react-app
Download react source code

Modify the webpack.config.js
```js
react: path.resolve(__dirname, "../src/react/packages/react")
```

## Run test
```sh
yarn run test

yarn test packages/scheduler/src/__tests__/Scheduler-test.js
```

## Contributor

1. fork react

2. git clone the forked repo
```sh
git clone https://github.com/<you-github-account>/react.git

yarn
```

3. coding

4. run test
```sh
# Run all test cases
yarn run test

yarn test package/scheduler/src/__test__/Scheduler-test.js --watch
```

5. commit


6. Create PR

