import express from "express";
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

routes.get("/checkAuth", checkAuth);

export default routes;
