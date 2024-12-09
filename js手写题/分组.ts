interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


(Array.prototype as any).groupBy = function(fn) {

}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */


export {}