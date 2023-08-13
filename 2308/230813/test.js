function findCommonIntegers(str1, str2) {
  const arr1 = [...new Set(str1.split("").map(Number))];
  const arr2 = [...new Set(str2.split("").map(Number))];

  console.log(arr1, arr2);

  const commonIntegers = arr1.filter((integer) => arr2.includes(integer));
  return commonIntegers;
}

const str1 = "12321";
const str2 = "42531";

const commonIntegers = findCommonIntegers(str1, str2);
console.log(commonIntegers); // [1, 2, 3]
