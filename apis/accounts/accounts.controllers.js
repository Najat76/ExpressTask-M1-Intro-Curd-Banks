let accounts = require("../../accounts");

//Fetch Accounts (get all accounts)
exports.getAllAcoounts = (req, res) => {
  return res.status(200).json(accounts);
};

//Create Account
//https://www.freecodecamp.org/news/how-to-get-the-last-item-in-an-array-in-javascript/
//to get the last item in the array : const lastItem = accounts[accounts.length - 1]
// newId : accounts.value(accounts.length - 1) <== wrong
exports.createAccount = (req, res) => {
  const newId = accounts[accounts.length - 1].id + 1;
  let newAccount = req.body;
  newAccount = accounts.push({ id: newId, ...newAccount, funds: 0 }); //...newAccount is spread operator
  return res.status(201).json({ body: accounts });
};

// Delete Account
//https://www.educative.io/answers/what-is-object-destructuring-in-javascript
exports.deleteAccount = (req, res) => {
  const { accountId } = req.params;
  accounts = accounts.filter((account) => account.id !== accountId);
  //console.log("accounts", accounts);
  return res.status(204).json({ msg: "Account deleted" });
};

//Update Account
exports.updateAccount = (req, res) => {
  const { accountId } = req.params;
  //accountFounded = accounts.find((account)=> accountId !== account.id);
  const account = accounts.find((acc) => accountId == acc.id);
  if (!account) {
    return res.status(404).json({ msg: "Account not found" });
  }
  account.username = req.body.username ? req.body.username : account.username;
  account.funds = req.body.funds ? req.body.funds : account.funds;
  return res.status(200).json(account);
};

//Bonus: Create a route that retrieve a single account by the username of the owner.
// exports.getOneAccount = (req, res) => {
//   const { AccountUsername } = req.params;
//   const account = accounts.find((acc) => accountUsername == acc.username);
//   return res.status(200).json(account);
//   if (!account) {
//     return res.status(404).json({ msg: "Account not found" });
//   }
// });

// module.exports = {
//   getAllAcoounts,
//   createAccount,
//   deleteAccount,
//   updateAccount,
//   getOneAccount,
// };
// if am not using exports.functionName, then i have to use const functionName ()=> {} scenario
//and call at the buttom moudule.exports{conatins functions name seperated by ,}
