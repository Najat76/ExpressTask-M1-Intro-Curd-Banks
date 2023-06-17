//https://expressjs.com/en/guide/routing.htmls
const express = require("express");
const router = express.Router();
let accounts = require("../../accounts"); // i need accounts.js

// middleware that is specific to this router
router.use();

//app.someMethod(routePath, someHandler);
//get all accounts
router.get("/api/accounts", callback_function);

//
//Create Account
// router.post('/', (req, res) => {
//     res.send('Got a POST request')
//   })

// app.post("/acounts", (req, res) => {
//   const newId = accounts.find(() => {});
//   const newAccount = [];
//   if (newAccount) {
//   } else {
//   }
// });

//Delete Account
// router.delete('/accounts/:accountId', (req, res) => {
//     res.send('Got a DELETE request at /user')
//   })

//Update Account
// router.put('/accounts/:accountId`, (req, res) => {
//     res.send('Got a PUT request at /user')
//   })

module.exports = router;
