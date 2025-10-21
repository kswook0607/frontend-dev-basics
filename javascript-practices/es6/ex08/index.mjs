console.log("===== [01. Unnamed Export Module]"); 

import myFunction from "./mods/ex01.mjs"; // 경로, 이름은 내가 정해서.
console.log(myFunction(10, 20));

import myObject from "./mods/ex02.mjs";
console.log(myObject.add(10, 20), myObject.subtract(100, 200));


console.log("===== [02. Named Export Module 1]"); 
import {subtract} from "./mods/ex03.mjs";

console.log(subtract(100, 200));


console.log("===== [03. Named Export Module 2]"); 
import * as m from "./mods/ex03.mjs";
console.log(m.add(10, 20), m.subtract(100, 200));


console.log("===== [04. Named + Unnamed  Export Module 3]");
import math, {add} from "./mods/ex04.mjs";
console.log(math.subtract(100, 200), add(10, 20));
