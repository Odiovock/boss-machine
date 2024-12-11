const express = require("express");
const minionsRouter = express.Router({mergeParams: true});
const db = require("./db");
const {createElement} = require("./utils");

minionsRouter.param("minionId", (req, res, next) => {
    const minion = db.getFromDatabaseById("minions", req.params.minionId);
    if (minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send("Minion not found");
    }
});

minionsRouter.get("/", (req, res, next) => {
    res.send(db.getAllFromDatabase("minions"));
});

minionsRouter.post("/", (req, res, next) => {
    const minionToAdd = createElement("minions", req.query);
    if (minionToAdd) {
        db.addToDatabase("minions", minionToAdd);
        res.status(201).send(minionToAdd);
    } else {
        res.status(400).send("Invalid parameters");
    }
});

minionsRouter.get("/:minionId", (req, res, next) => {
    res.send(req.minion);
});

minionsRouter.put("/:minionId", (req, res, next) => {
    db.updateInstanceInDatabase("minions", req.query);
    res.send(db.getFromDatabaseById("minions", req.minion.id));
});

minionsRouter.delete("/:minionId", (req, res, next) => {
    db.deleteFromDatabasebyId("minions", req.minion.id);
    res.status(204).send();
});



module.exports = minionsRouter;