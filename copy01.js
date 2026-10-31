
/** 浅拷贝 */
Object.assign({}, { a: 1, b: 2 }, { b: 3, c: 4 });
const arr = [...[1, 2, 3], ...[4, 5, 6]];

/** 深拷贝 */
JSON.parse(JSON.stringify({ a: 1, b: 2 }));
const deepCopied = structuredClone({ a: 1, b: 2 });

