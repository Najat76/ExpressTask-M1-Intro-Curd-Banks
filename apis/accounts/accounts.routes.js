//https://expressjs.com/en/guide/routing.htmls
const express = require("express");
const router = express.Router();
const {
  getAllAcoounts,
  createAccount,
  deleteAccount,
  updateAccount,
  getOneAccount,
} = require("./accounts.controllers");
let accounts = require("../../accounts"); // i need accounts.js

//Fetch Accounts (get all accounts)
router.get("/", getAllAcoounts);
//Create Account
router.post("/", createAccount);

// Delete Account

router.delete("/:accountId", deleteAccount);

//Update Account
router.put("/:accountId", updateAccount);

//Bonus: Create a route that retrieve a single account by the username of the owner.
router.get("/:accountId", getOneAccount);
module.exports = router;
