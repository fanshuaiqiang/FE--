/**
 * 手动实现bind. call. apply
 */


/**
 * 手写 promise
 */


/**
 *  用promise 实现一个异步队列
 */

const delayPromise = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
} 

const asyncQueue = async () => {
    await delayPromise(1000)
    console.log('1')
    await delayPromise(2000)
    console.log('2')
    await delayPromise(3000)
    console.log('3')
}

Promise.resolve().then(() => {
    asyncQueue()
}).then(() => {
    console.log('done')
})