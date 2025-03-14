import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import connectDB from "../config/database";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../config/swagger.json";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối database
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Cấu hình Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
