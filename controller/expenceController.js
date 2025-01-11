const Expence = require("../Model/Expence");
const User = require("../Model/User");

const addExpence = async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;

    console.log(req.user);

    const user = await User.findById({ _id: req.user.id });
    const userID = user.id;
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const expence = await Expence.create({
      amount,
      category,
      description,
      date,
      userID: userID,
    });
    if (!expence) {
      return res.status(404).json({ msg: "Expence not created" });
    }
    return res.status(200).json({ msg: "Expence created", expence });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const getExpence = async (req, res) => {
  try {
const user = await User.findById({ _id: req.user.id });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

       const expence = await Expence.find({ userID: req.user.id });
    return res.status(200).json({ msg: "Expence fetched", expence });
  }catch(error){
      return res.status(500).json({msg: "Internal server error"});
  }
  }
const  myExpence = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user.id });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const expence = await Expence.find({ userID: req.user.id });
    return res.status(200).json({ msg: "Expence fetched", expence });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};
const updateExpence = async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;

    const user = await User.findById({ _id: req.user.id });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const expence = await Expence.findByIdAndUpdate(
      { _id: req.query.id },
      { amount, category, description, date },
      { new: true }
    );
    if (!expence) {
                return res.status(404).json({ msg: "Expence not updated" });
    
    } return res.status(200).json({ msg: "Expence updated", expence });
  
}catch(error){
      console.log(error.message)
      return res.status(500).json({msg: "Internal server error"});
  }
}

const deleteExpense = async(req,res)=>{
      try {
       const user = await User.findById({_id: req.user.id});
       if(!user){
        return res.status(404).json({msg: "User not found"});
       }
        const expence = await Expence.findByIdAndDelete({_id: req.params.id});
            if(!expence){
                  return res.status(404).json({msg: "Expence not found"}
                  );}
      return res.status(200).json({msg: "Expence deleted", expence})
      }catch (error) {
            return res.status(500).json({msg: "Internal server error"});
     
      }
}
module.exports = {
  addExpence,getExpence, myExpence,updateExpence,deleteExpense
};
