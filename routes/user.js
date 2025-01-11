const router = require('express').Router();
const {createUser,login}=require("../controller/userController")

router.post('/userCreate',createUser)
router.post("/userLogin",login)


module.exports = router;