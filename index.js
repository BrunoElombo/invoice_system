import express from 'express';
import bodyParser from "body-parser";
import invoiceRoutes from "./routes/invoice.route.js";
import invoiceItemRoutes from "./routes/invoiceitem.route.js";
import permissionRoutes from "./routes/permission.route.js";
import quoteRoutes from "./routes/quote.route.js";
import roleRoutes from "./routes/role.route.js";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
import { PORT } from './config/config.js';



const app = express();
app.use(bodyParser.json());

const corsOptions={
    origin: "*"
}
app.use(cors(corsOptions));

app.use("/api/invoices",  invoiceRoutes);
app.use("/api/invoice-items",  invoiceItemRoutes);
app.use("/api/pemrissions",  permissionRoutes);
app.use("/api/quotes",  quoteRoutes);
app.use("/api/roles",  roleRoutes);
app.use("/api/users",  userRoutes);

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));