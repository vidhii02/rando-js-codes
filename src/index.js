var age = 10;
var name = "vidhi";
var isAdult = true;
var firstname = undefined;
var lastname = null;
//var bigNum = BigInt(7895489589589568955484596);
age = 15;

console.log("variable age", age);
console.log("variable name", name);
console.log("variable isAdult", isAdult);
console.log("variable firstname", firstname);
console.log("variable lastname", lastname);

var student = {
  name: "vidhi",
  isAdult: false,
  age: 12
};

var sstudents = ["vidhi", "siddhesh", "mhatre"];
console.log("object:", student);
console.log("object key access", student.name);
console.log(sstudents);
console.log(sstudents[2]);

//array inside object
var divv = {
  studentt: ["vidhi", "vishal"]
};
console.log(divv.studentt);

//object inside object
var oob = {
  details: { name: "vidhi", roll: "six" }
};
console.log(oob);
console.log(oob.details);
console.log(oob.details.name);

//object inside array
var naa = {
  naav: [{ namee: "vidhi" }]
};
console.log(naa);
console.log(naa.naav.namee);
console.log(naa.naav);
