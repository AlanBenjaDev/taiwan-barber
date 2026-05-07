"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_js_1 = __importDefault(require("./App.js"));
const http_1 = __importDefault(require("http"));
const PORT = 4000;
const server = http_1.default.createServer(App_js_1.default);
server.listen(PORT, () => {
    console.log(` Servidor activo en http://localhost:${PORT}`);
});
//# sourceMappingURL=Server.js.map