# Initiate Node project

npm init
> press enter to all

Change package.json ->
```
{
  "name": "nodebasic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
	"start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "ISC"
}
```

Create basic index.js -file ->
```
const http = require('http')
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```

npm start OR node index.js

Open http://localhost:3001 to test
npm install express
npm install --save-dev nodemon

Change package.json ->
```
{
  // ..
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ..
}
```

npm run dev
> to update: npm update
> to install to new machine: npm install

Update [index.js](index.js) to have basic API functionality (Example already implemented)