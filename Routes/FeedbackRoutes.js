import User from "../models/User.js";
import { createAdmin, getAllUsers } from "../controllers/userController.js";
import { createAlumini } from "../controllers/userController.js";
import { createStudent } from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/CompanyControllers.js";
import { createReview, getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/LikesControllers.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";


const router = express.Router()



router.post("/admin/create",createAdmin)
router.post("/alumini/create",createAlumini)
router.post("/student/create",createStudent)
router.post("/company/create",isAdmin,createCompany)
router.get("/user/get",getAllUsers)
router.get("/company/get",getCompanies)
router.post("/review/create",createReview)
router.post("/like/create",likeReviews)


export default router;