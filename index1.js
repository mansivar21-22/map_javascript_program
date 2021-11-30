const firstname = ["mohit", "rahul", "sumit"];
console.log(firstname[0]);
console.log(firstname[1]);
console.log(firstname[2]);
//using map

const newArray = firstname.map(function(cvalue){
    return cvalue+"varshney";

});
console.log(firstname);
console.log(newArray);
