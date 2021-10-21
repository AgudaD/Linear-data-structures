
let set1 = [2, 4, 6, 8];
let set2 = [3, 6, 9, 12];

function addTwoArrays(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) >= 0) {
      continue;
    }
    sum += a[i];
  }

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) >= 0) {
      continue;
    }
    sum += b[i];
  }
  return sum;
}

console.log(addTwoArrays(set1, set2));

// using the hash table
function addUniqueElement(a, b) {
  let hash = new Map();

  for (let i = 0; i < a.length; i++) {
    if (hash.has(set1[i])) hash.set(set1[i], 1 + hash.get(set1[i]));
    else hash.set(set1[i], 1);
  }

  for (let i = 0; i < b.length; i++) {
    if (hash.has(set2[i])) hash.set(set2[i], 1 + hash.get(set2[i]));
    else hash.set(set2[i], 1);
  }

  let sum = 0;

  for (let entry of hash) {
    if (parseInt(entry[1].toString()) == 1)
      sum += parseInt((entry[0]).toString());
  }
  return sum;
}
console.log(addUniqueElement(set1, set2));



//Sum of overlapping elements
let arrays  = [
  [3, 1, 7, 9, 2, 13, 17],
  [2, 4, 1, 9, 3, 13, 6],
];
function getCommonElements(arrays){
let currentValues = {};
let commonValues = {};
for (let i = arrays[0].length-1; i >=0; i--){
  currentValues[arrays[0][i]] = 1; 
}
for (let i = arrays.length-1; i>0; i--){
  let currentArray = arrays[i];
  for (let j = currentArray.length-1; j >=0; j--){
    if (currentArray[j] in currentValues){
      commonValues[currentArray[j]] = 1;
    }
  }
  currentValues = commonValues;
  commonValues = {};
}
return Object.keys(currentValues).map(function(value){
  return parseInt(value);
});
}
console.log(getCommonElements(arrays)); 
let data = getCommonElements(arrays);
sum = data.reduce((a, b) => {
return a + b;
});

console.log('Overlapping sum: ' + sum);
