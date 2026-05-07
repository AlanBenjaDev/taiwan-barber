import app from "./App.js";
import http from "http";


const PORT = 4000;

const server = http.createServer(app);



server.listen(PORT, () => {
    console.log(` Servidor activo en http://localhost:${PORT}`);
});