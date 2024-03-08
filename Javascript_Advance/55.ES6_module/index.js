import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(PI);
console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);