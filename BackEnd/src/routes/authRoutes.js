import express from "express";
import { protectedRoute } from "../Middleware/middleware.js";

import {
	signup,
	login,
	logout,
	checkAuth,
} from "../controllers/authController.js";

const routes = express.Router();

routes.post("/signup", signup);
routes.post("/login", login);
routes.post("/logout", logout);

routes.get("/checkAuth", protectedRoute, checkAuth);

export default routes;
