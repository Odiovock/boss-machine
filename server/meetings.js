const express = require("express");
const meetingsRouter = express.Router({mergeParams: true});
const db = require("./db");

meetingsRouter.get("/", (req, res, next) => {
    res.send(db.getAllFromDatabase("meetings"));
});

module.exports = meetingsRouter;