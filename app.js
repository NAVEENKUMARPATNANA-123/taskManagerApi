
import express from "express";
import db from "./config/db.js";


import index from "./routes/index.js";
import admin from "./routes/admin.js";
import user from "./routes/user.js";

const app = express();
app.use(express.json());

app.use("/index",index)
app.use("/admin",admin)
app.use("/user",user)


db.sync()
  .then(() => console.log("Tables Synced "),
app.listen(3000, () => console.log("Server running on port 3000")))
  .catch(err => console.error(err));


// import authRoutes from "./routes/loginAuthentication.js";
// import registerRoutes from "./routes/registrationRoutes.js";
// import taskRoutes from "./routes/addTaskRoutes.js";
// import viewTaskRoutes from "./routes/viewTaskRoutes.js";
// import updateTaskRoutes from "./m.js/updateTaskRoutes.js";
// import deleteTaskRoutes from "./routes/deleteTaskRoute.js";
// import viewUsersRoutes from "./routes/ViewUsersRoutes.js";


// app.use("/auth", authRoutes);


// app.use("/task", taskRoutes);
// app.use("/view", viewTaskRoutes);
// app.use("/update", updateTaskRoutes);
// app.use("/delete", deleteTaskRoutes);
// app.use("/users", viewUsersRoutes);
