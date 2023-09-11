const app = require("./app")
const userRoutes = require("./routes/userRoutes");
const databaseConnection = require("./config/databaseConnection");

databaseConnection();

app.use("/api/v1",userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`);
})