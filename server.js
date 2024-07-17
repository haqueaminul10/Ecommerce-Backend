//REQUIRE EXPRESS
const express = require('express');
const app = express();
app.use(express.json());

//DOTENV
const dotenv = require('dotenv');
dotenv.config();
//PORT
const PORT = process.env.PORT;
//SERVER LISTEN
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
