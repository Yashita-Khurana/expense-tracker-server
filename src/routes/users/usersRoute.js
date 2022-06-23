const express = require("express");
// const {
//   userRegisterCtrl,
//   loginUserCtrl,
//   fetchUsersCtrl,
//   userProfileCtrl,
//   updateUserCtrl,
//   deleteUsersCtrl,
//   fetchUserDetailsCtrl,
// } = require("../../controllers/users/usersCtrl")

const { registerUser, fetchUsersCtrl, loginUserCtrl, userProfileCtrl,updateUserCtrl } = require("../../controllers/users/usersCtrl");
 const authMiddleware = require("../../middlewares/authMiddleware");

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.get('/',authMiddleware,fetchUsersCtrl);
userRoute.post("/login", loginUserCtrl);


// userRoutes.get("/", authMiddleware, fetchUsersCtrl);
userRoute.get("/profile",authMiddleware,userProfileCtrl);
userRoute.put("/update", authMiddleware, updateUserCtrl);
// userRoutes.delete("/:id", deleteUsersCtrl);
// userRoutes.get("/:id", fetchUserDetailsCtrl);

module.exports = userRoute;