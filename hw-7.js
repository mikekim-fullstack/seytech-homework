/**
 * Remove an object from lists
 */
const data1 = { a: 1, b: '2', c: 3, d: 4, e: 5 }
const omit = (obj, arr) =>
    Object.keys(obj)
        .filter(k => !arr.includes(k))
        .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});


const result = omit(data1, ['b'])
const r2 = Object.keys(data1).reduce((acc, key) => {
    console.log('acc=', acc, ' ,key=', key)
    acc[key] = data1[key]
    return acc
}, {})
console.log(data1, ', \n', result, 'r2=', r2);
console.log(omit({ a: 1, b: 2, c: 3 }, ['c']));