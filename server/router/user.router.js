import { Router } from "express";
import {
  getProflies,
  login,
  logout,
  resgister,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/register", resgister);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", getProflies);

export default router;
