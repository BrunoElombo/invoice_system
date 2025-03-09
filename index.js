const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require("body-parser");
const useRoutes = require("./routes/usersRoutes")
const cors = require("cors")

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
const corsOptions={
    origin: "*"
}

app.use(cors(corsOptions));


const PORT = process.env.PORT;

app.get('/', async (req, res)=>{
    let result = prisma.lesson.findMany();
    res.send({message: "Hello world!!!!!"});
});

app.use("/api/v1/users",  useRoutes)

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));