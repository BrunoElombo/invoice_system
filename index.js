import express from 'express';
import bodyParser from "body-parser";
import invoiceRoutes from "./routes/invoice.route.js";
import invoiceItemRoutes from "./routes/invoiceitem.route.js";
import permissionRoutes from "./routes/permission.route.js";
import quoteRoutes from "./routes/quote.route.js";
import roleRoutes from "./routes/role.route.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.routes.js";
import session from 'express-session';
import cors from "cors";
import { PORT } from './config/config.js';
import { verifySession } from './middlewares/auth.middlewares.js';



const app = express();
app.use(bodyParser.json());

const corsOptions={
    origin: "*"
}
app.use(cors(corsOptions));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));

app.use("/api",  authRoutes);

app.use("/api/users",  userRoutes);
app.use(verifySession)
app.use("/api/invoices",  invoiceRoutes);
app.use("/api/invoice-items",  invoiceItemRoutes);
app.use("/api/pemrissions",  permissionRoutes);
app.use("/api/quotes",  quoteRoutes);
app.use("/api/roles",  roleRoutes);

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));