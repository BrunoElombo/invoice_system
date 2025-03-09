const { PrismaClient } = require("@prisma/client");
let  prisma = new PrismaClient();


const getAllUsers=(req,  res)=>{
    res.send({message: "All users"});
}


const getUser=(req, res)=>{
    res.send("user data");
}


const addUser=(req, res)=>{
    let body = req.body;
    console.log(body)
    // const user = prisma.user.findFirst({
    //     where: {
    //         username:body.username,
    //         password:body.password
    //     }
    // })
    // res.send(user)
    if(body.username == "styve" && body.password == "123"){
        res.send({message:"Login successful"});
        return;
    }
    res.send({message: "Failed to login"});
}

const updateUser=(req, res)=>{
    res.send("Updated user");
}

const deleteUser=(req, res)=>{
    res.send("Deleted user");
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}