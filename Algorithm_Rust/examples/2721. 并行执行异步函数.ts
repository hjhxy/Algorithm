type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject)=>{
        let arr: T[] = [];
        let count = 0;
        for (const i in functions) {
            functions[i]().then(res => {
                arr[i] = res;
                count += 1;
                if(count == functions.length) {
                    resolve(arr);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

 