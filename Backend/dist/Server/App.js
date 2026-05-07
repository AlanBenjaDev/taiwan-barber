"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const appointment_routes_js_1 = __importDefault(require("../Routes/appointment.routes.js"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/appointments', appointment_routes_js_1.default);
exports.default = app;
//# sourceMappingURL=App.js.map