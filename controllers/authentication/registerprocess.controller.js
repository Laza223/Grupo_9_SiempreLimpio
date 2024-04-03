const { loadData,saveData } = require("../../database");
const bcrypt=require("bcrypt.js");
module.exports= (req, res)=>{
  const {email,password} =req.body;
  const users = loadData("users")

  const newUser = {
    id: !users.length ? 1 : users[users.length - 1].id + 1,
    name: "",
    surname: "",
    email: email?.trim().toLowerCase(),
    
    password: hashSync(password?.trim(), 10),
    role: "REGULAR",
    avatar: "default-avatar.jpg",
  };

  users.push(newUser);

  saveData(users,"users");

  res.redirect("/")

};
 