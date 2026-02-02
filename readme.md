
##  Installation

```bash
npm install -g
```
```bash
npm install express
```

### Initialize the project

```bash
npm init
```

##  Server Code

```javascript
const express = require('express')
const app = express()
const port = 8080

const user = [{
    id: 1, 
    name: "kiran"
},
{
    id: 2,
    name: "bhum"
}]

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/users', (req, res) => {
    res.send(user)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
```
### Start the server locally:
```bash
node index.js
```
```bash
npm install --save-dev nodemon
```
```bash
npm run dev
```
You should see the following output:
```
Server is running at http://localhost:8080
```
###  Root Endpoint

```bash
curl http://localhost:8080/
```

```bash
curl http://localhost:8080/users
```

##  Development

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```