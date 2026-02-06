
##  Installation

```bash
npm install -g
```
```bash
npm install express
npm install mongoose
```

### Initialize the project

```bash
npm init
```

##  Server Code

```javascript
import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/student.js";
import teacherRoutes from "./routes/teacher.js";

const app = express();
const port = 8080;

app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

```
### Start the server locally:
```bash
node server.js
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
curl http://localhost:8080/students
curl http://localhost:8080/teachers
```

##  Development

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```