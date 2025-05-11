import express from "express"
import { createServer } from "http";
import cors from "cors"
import routes from "./routes/index.routes";

const app = express()

// Create HTTP server
const httpServer = createServer(app);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.disable("x-powered-by");

app.use(routes)

app.listen(PORT, () => {
    console.log(`Localhost running on port ${PORT}`)
})