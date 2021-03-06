"use strict";
exports.__esModule = true;
var starfighters_1 = require("./starfighters");
var base_ships_1 = require("./base-ships");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
