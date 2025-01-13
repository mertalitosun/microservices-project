const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const sequelize = require("../common/db/dbConnection");
const handleError = require('../common/middlewares/errorHandler');

require("../common/db/dbConnection");
require("./src/data/relationships");


app.use(cors({origin: '*',credentials: true}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/user");
const roleRoutes = require("./src/routes/role");

app.use(authRoutes);
app.use(userRoutes);
app.use(roleRoutes);

// (async () => {
//   await sequelize.sync({ force: true });
// })();


app.use(handleError);

app.listen(process.env.PORT || 3001, () => {
  console.log(process.env.PORT || 3001, "portuna bağlandı");
});
