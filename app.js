const express = require("express");
const app = express();
let accounts = require("./accounts");

const PORT = 8000;

//const accountsRoutes = require("./api/accounts/accounts.routers.js");

// https://masteringjs.io/tutorials/express/express-json
// It parses incoming JSON requests and puts the parsed data in req.body.
//Ali Alsarraf: if i send a request to the server, the server can read (JSON) with no bind error
app.use(express.json()); //on the top always :)

// app.use(accountsRoutes);

//app.someMethod(routePath, someHandler); in all steps in the task

//Fetch Accounts (get all accounts)
app.get("/accounts", (req, res) => {
  return res.status(200).json(accounts);
});

//Create Account
//https://www.freecodecamp.org/news/how-to-get-the-last-item-in-an-array-in-javascript/
//to get the last item in the array : const lastItem = accounts[accounts.length - 1]
// newId : accounts.value(accounts.length - 1) <== wrong
app.post("/accounts", (req, res) => {
  const newId = accounts[accounts.length - 1].id + 1;
  let newAccount = req.body;
  newAccount = accounts.push({ id: newId, ...newAccount, funds: 0 }); //...newAccount is spread operator
  return res.status(201).json({ body: accounts });
});

// app.post("api/acounts", (req, res) => {
//   const newId = accounts.find(() => {});
//   const newAccount = [];
//   if (newAccount) {
//   } else {
//   }
// });

// Delete Account
//https://www.educative.io/answers/what-is-object-destructuring-in-javascript
app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  accounts = accounts.filter((account) => account.id !== accountId);
  //console.log("accounts", accounts);
  return res.status(204).json({ msg: "Account deleted" });
});

//Update Account
app.put("/accounts", (req, res) => {
  const { accountId } = req.params;
  //accountFounded = accounts.find((account)=> accountId !== account.id);
  const account = accounts.find((acc) => accountId == acc.id);
  if (!account) {
    return res.status(404).json({ msg: "Account not found" });
  }
  account.username = req.body.username ? req.body.username : account.username;
  account.funds = req.body.funds ? req.body.funds : account.funds;
  return res.status(200).json(account);
});

//Bonus: Create a route that retrieve a single account by the username of the owner.
// app.get("/accounts", (req, res) => {
//   const { AccountUsername } = req.params;
//   const account = accounts.find((acc) => accountUsername == acc.username);
//   return res.status(200).json(account);
//   if (!account) {
//     return res.status(404).json({ msg: "Account not found" });
//   }
// });

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
