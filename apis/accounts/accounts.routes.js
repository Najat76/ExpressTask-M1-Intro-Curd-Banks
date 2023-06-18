//https://expressjs.com/en/guide/routing.htmls
const express = require("express");
const router = express.Router();
const {
  getAllAcoounts,
  createAccount,
  deleteAccount,
  updateAccount,
  getOneAccount,
} = require("./apis/accounts/accounts.controllers");
let accounts = require("../../accounts"); // i need accounts.js

// middleware that is specific to this router
router.use();

//Fetch Accounts (get all accounts)
router.get("/", getAllAcoounts);
//Create Account
router.post("/", createAccount);

// Delete Account

router.delete("/:accountId", deleteAccount);

//Update Account
router.put("/:accountId", updateAccount);

//Bonus: Create a route that retrieve a single account by the username of the owner.
// router.get("/", getOneAccount);
module.exports = router;
