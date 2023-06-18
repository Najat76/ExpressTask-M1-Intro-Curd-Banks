const express = require("express");
const app = express();
const accountsRoutes = require("./apis/accounts/accounts.routes");
const PORT = 8000;
// https://masteringjs.io/tutorials/express/express-json
// It parses incoming JSON requests and puts the parsed data in req.body.
//Ali Alsarraf: if i send a request to the server, the server can read (JSON) with no bind error
app.use(express.json()); //on the top always :)
app.use("/accounts", accountsRoutes);

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
