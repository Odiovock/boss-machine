const express = require("express");
const ideasRouter = express.Router({mergeParams: true});
const db = require("./db");
const {createElement} = require("./utils");

ideasRouter.param("ideaId", (req, res, next) => {
    const idea = db.getFromDatabaseById("ideas", req.params.ideaId);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send("Idea not found");
    }
});

ideasRouter.get("/", (req, res, next) => {
    res.send(db.getAllFromDatabase("ideas"));
});

ideasRouter.post("/", (req, res, next) => {
    const ideaToAdd = createElement("ideas", req.query);
    if (ideaToAdd) {
        db.addToDatabase("ideas", ideaToAdd);
        res.status(201).send(ideaToAdd);
    } else {
        res.status(400).send("Invalid parameters");
    }
});

module.exports = ideasRouter;