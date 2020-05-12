import {MillenniumFalcon} from './starfighters'
import {Spacecraft, Containership} from './base-ships'
import * as _ from 'lodash'
import { readFileSync } from 'fs';
console.log(_.pad("Typescript Examples", 40, "="))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperSpace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers >2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`);[]

const file = readFileSync("./teste.json", 'utf-8')
let json = JSON.parse(file)
console.log(json.sucess)