import app from "./App.js";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);



server.listen(PORT, () => {
    console.log(` Servidor activo en http://localhost:${PORT}`);
});