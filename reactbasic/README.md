# Install React base

npx create-react-app reactbasic
cd reactbasic
npm start

DELETE unneeded files
- App.cs
- App.test.js
- logo.svg
- reportWebVitals.js

rm -rf .git

# Install Axios server

npm install axios
npm install json-server --save-dev

> change package.json ->

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server -p3001 --watch db.json"
  },
```
npm run server


