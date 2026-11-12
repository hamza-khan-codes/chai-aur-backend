import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true // learn about white listing yourself
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({
    limit: "16kb",
    extended:true
    
}))
app.use(express.static("public"))
app.use(cookieParser()) // For securely allowing cookie user browser CURD operation

// routes import 
import userRouter from "./routes/user.routes.js"

// routes declaration
// app.use("/users", userRouter) // http://localhost:800/users/register
app.use("/api/v1/users", userRouter) // better approch
// http://localhost:800/api/v1/users/register

export default app