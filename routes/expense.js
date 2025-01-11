const router = require('express').Router();
const { addExpence,getExpence, myExpence,updateExpence,deleteExpense}=require("../controller/expenceController")
const fetchUser = require('../middleware/fetchUser')

router.post("/addExpence",fetchUser,addExpence)
router.get("/getExpence",fetchUser,getExpence)
router.get("/myExpence",fetchUser,myExpence)
router.put("/updateExpence",fetchUser,updateExpence)
router.delete("/delExpence",fetchUser,deleteExpense)



module.exports = router;