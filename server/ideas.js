const express = require("express");
const ideasRouter = express.Router({mergeParams: true});
const db = require("./db");

ideasRouter.get("/", (req, res, next) => {
    res.send(db.getAllFromDatabase("ideas"));
});

module.exports = ideasRouter;