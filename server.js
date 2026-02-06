import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";

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
