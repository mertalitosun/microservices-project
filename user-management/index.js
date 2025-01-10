const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./src/data/dbConnection");

require("./src/data/dbConnection");
require("./src/data/relationships");


app.use(cors({origin: '*',credentials: true}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const authRoutes = require("./src/routes/auth");

app.use(authRoutes);

// (async () => {
//   await sequelize.sync({ force: true });
// })();

app.listen(process.env.PORT || 3001, () => {
  console.log(process.env.PORT || 3001, "portuna bağlandı");
});
