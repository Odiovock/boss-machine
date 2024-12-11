const express = require("express");
const meetingsRouter = express.Router({mergeParams: true});
const db = require("./db");
const {createElement} = require("./utils");

meetingsRouter.get("/", (req, res, next) => {
    res.send(db.getAllFromDatabase("meetings"));
});

meetingsRouter.post("/", (req, res, next) => {
    const meetingToAdd = createElement("meetings", req.query);
    if (meetingToAdd) {
        db.addToDatabase("meetings", meetingToAdd);
        res.status(201).send(meetingToAdd);
    } else {
        res.status(400).send("Invalid parameters");
    }
});

meetingsRouter.delete("/", (req, res, next) => {
    db.deleteAllFromDatabase("meetings");
});

module.exports = meetingsRouter;