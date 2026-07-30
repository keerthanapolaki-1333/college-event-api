require("dotenv").config();

const express = require("express");

const db = require("./config/db");

const studentRoutes = require("./routes/student.routes");

const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

app.use("/api/students", studentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

async function startServer() {

    try {

        const connection = await db.getConnection();

        console.log("✅ MySQL Database Connected Successfully");

        connection.release();

        app.listen(PORT, () => {

            console.log(`🚀 Server running on port ${PORT}`);

        });

    } catch (error) {

        console.log("Database Connection Failed");

        console.log(error.message);

        process.exit(1);

    }

}

startServer();