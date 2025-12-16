type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObjxect(obj: Obj): Obj {
    let root: Obj = {};
    if (Array.isArray(obj)) {
        root = [];
        for (let i = 0; i < obj.length; i++) {
            if (Boolean(obj[i])) { // 非空
                // root.push(obj[i]);
                resolve(root[i], obj[i]);
            }
        }
    } else if (typeof obj === 'object') {
        root = {};
        const keys = Object.keys(obj);
        for (let key of keys) {
            if (Boolean(obj[key])) { // 非空
                // root[key] = obj[key];
                resolve(root[key], obj[key]);
            }
        }
    }
    return root;
};

function resolve(root: JSONValue, obj: JSONValue): JSONValue {
    console.log(root, obj);

    if (Array.isArray(obj)) {
        root = [];
        for (let i = 0; i < obj.length; i++) {
            if (Boolean(obj[i])) { // 非空
                root.push(obj[i]);
                resolve(root[i], obj[i]);
            }
        }
    } else if (typeof obj === 'object' && obj !== null) {
        root = {};
        const keys = Object.keys(obj);
        for (let key of keys) {
            if (!Boolean(obj[key])) {
                delete obj[key];
            }
        }
    }
    return obj;
}

let res = compactObjxect({ "a": null, "b": [false, 1] });
console.log(res);
