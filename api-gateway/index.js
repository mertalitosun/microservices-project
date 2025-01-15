const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const CUSTOMERS_SERVICE_URL = process.env.CUSTOMERS_SERVICE_URL;
const SALES_SERVICE_URL = process.env.SALES_SERVICE_URL;
const USERS_SERVICE_URL = process.env.USERS_SERVICE_URL;

const { isAuth, isAdmin, isSales } = require("../common/middlewares/auth");

app.use("/users",createProxyMiddleware({target:USERS_SERVICE_URL, changeOrigin: true }));
app.use("/customers",isAuth,isAdmin,createProxyMiddleware({target:CUSTOMERS_SERVICE_URL, changeOrigin: true }));
app.use("/sales",isAuth,isSales,createProxyMiddleware({target:SALES_SERVICE_URL, changeOrigin: true }));
app.use(express.json());

app.listen(process.env.PORT || 3004, () => {
    console.log(process.env.PORT || 3004, "portuna bağlandı. Api-gateway");
});
  