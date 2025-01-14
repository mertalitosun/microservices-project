const express = require("express");
const app = express();
require("dotenv").config();

const sequelize = require("../common/db/dbConnection");
const handleError = require('../common/middlewares/errorHandler');

require("../common/db/dbConnection");
require("./src/data/relationships");


app.use(cors({origin: '*',credentials: true}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));



// (async () => {
//   await sequelize.sync({ force: true });
// })();

app.use(handleError);

app.listen(process.env.PORT || 3002, () => {
  console.log(process.env.PORT || 3002, "portuna bağlandı");
});
