var numChild = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '69.420'];
var partName = ["Sydney", "Allissa", "Felicity", "Maria", 'John', 'Curtis', 'Henry', 'Steve'];
var geoLoc = ["Paris", "Berlin", "San Francisco", "Alameda"];
var job = ["a Plumber", "an Electrician", "a Banker", "an Accountant", "an Underwear Model"];

const ranChild = Math.floor(Math.random() * numChild.length);
const ranName = Math.floor(Math.random() * partName.length);
const ranLoc = Math.floor(Math.random() * geoLoc.length);
const ranJob = Math.floor(Math.random() * job.length);

if (numChild[ranChild] == 1){
    var kids = false
} else {
    var kids = true
}

if (kids == true) {
    var kidsRandom = 'kids'
} else {
    var kidsRandom = 'kid'
}

var futureWife = 'You will be a ' + job[ranJob] + ', living in ' + geoLoc[ranLoc] + ' with ' + numChild[ranChild] + ' ' + kidsRandom + ' and a wife named ' + partName[ranName] + '.';
var futureHusband = 'You will be a ' + job[ranJob] + ', living in ' + geoLoc[ranLoc] + ' with ' + numChild[ranChild] + ' ' + kidsRandom + ' and a wife named ' + partName[ranName] + '.';

if (ranName > 3) {
    console.log(futureHusband)
} else {
    console.log(futureWife)
}
