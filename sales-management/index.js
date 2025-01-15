const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();
const path = require("path")

const rootDir = path.resolve(__dirname);
const sequelize = require(path.join(rootDir, 'src/db/dbConnection'));
const handleError = require(path.join(rootDir, 'src/middlewares/errorHandler'));

require(path.join(rootDir, 'src/db/dbConnection'));
require("./src/db/relationships");


app.use(cors({origin: '*',credentials: true}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const salesRoutes = require("./src/routes/sales");
const swaggerRoutes = require("./src/routes/swagger");


app.use(salesRoutes);
app.use(swaggerRoutes);


// (async () => {
//   await sequelize.sync({ force: true });
// })();

app.use(handleError);

app.listen(process.env.PORT || 3002, () => {
  console.log(process.env.PORT || 3002, "portuna bağlandı");
});
