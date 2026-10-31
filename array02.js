/**
 * map 不会修改原属组
 */
const originalArray = [1, 2, 3];
const newArray = originalArray.map((item) => item * 2);
console.log(originalArray); // [1, 2, 3]
console.log(newArray); // [2, 4, 6]

/**
 * filter 不会修改原属组
 */
const originalArray2 = [1, 2, 3, 4, 5];
const newArray2 = originalArray2.filter((item) => item > 3);
console.log(originalArray2); // [1, 2, 3, 4, 5]
console.log(newArray2); // [4, 5]

/**
 * reduce 不会修改原属组
 */
const originalArray3 = [1, 2, 3];
const sum = originalArray3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(originalArray3); // [1, 2, 3]
console.log(sum); // 6  

/**
 * splice 会修改原属组
 */
const originalArray4 = [1, 2, 3, 4, 5];
const removedElements = originalArray4.splice(2, 2); // 从索引2开始删除2个元素
console.log(originalArray4); // [1, 2, 5]
console.log(removedElements); // [3, 4]

/**
 * slice 不会修改原属组 
 */
const originalArray5 = [1, 2, 3, 4, 5];
const newArray5 = originalArray5.slice(1, 4); // 从索引1到索引4（不包括索引4）
console.log(originalArray5); // [1, 2, 3, 4, 5]
console.log(newArray5); // [2, 3, 4]