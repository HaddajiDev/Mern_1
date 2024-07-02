const express = require("express");
const UserModal = require("../models/user");

const userRouter = express.Router();

//add user
userRouter.post("/add", async(request, result) =>{
    try {
        let newUser = new UserModal(request.body);
        let res = await newUser.save();
        result.send({user: res, msg: "user added"});
    } catch (error) {
        console.log(error);
    }
});

//get all users
userRouter.get("/", async function(request, result) {
    try {
        let users = await UserModal.find();
        result.send({ users: users, msg: "All users" });
    } catch (error) {
        console.log(error);
    }
});


//get one user
userRouter.get("/:id", async function(request, result) {
    try {
        let user = await UserModal.findById(request.params.id);
        result.send({ user: user, msg: "user found" });
    } catch (error) {
        console.log(error);
    }
});

//delete user
userRouter.delete("/:id", async function(request, result) {
    try {
        await UserModal.findByIdAndDelete(request.params.id);
        result.send({ msg: "user deleted" });
    } catch (error) {
        console.log(error);
    }
});

//Update user
userRouter.put("/:id", async function(request, result) {
    try {
        await UserModal.findByIdAndUpdate({ _id: request.params.id }, { $set: {...request.body } });
    } catch (error) {
        console.log(error);
    }
})


module.exports = userRouter;