import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import listingRouter from "./routes/listingRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors())
app.use(clerkMiddleware())

const PORT = process.env.PORT || 3001;

app.use(
  // Expose the middleware on our recommended path at `/api/inngest`.
  "/api/inngest",
  serve({ client: inngest, functions })
);

app.use("/api/listing", listingRouter)
app.use("/api/chat", chatRouter)

app.get("/", (req, res) => res.send("Server is Live!"))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))