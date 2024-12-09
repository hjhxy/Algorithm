function compactObjxect(obj) {
    var root = {};
    if (Array.isArray(obj)) {
        root = [];
        for (var i = 0; i < obj.length; i++) {
            if (Boolean(obj[i])) { // 非空
                // root.push(obj[i]);
                resolve(root[i], obj[i]);
            }
        }
    }
    else if (typeof obj === 'object') {
        root = {};
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (Boolean(obj[key])) { // 非空
                // root[key] = obj[key];
                resolve(root[key], obj[key]);
            }
        }
    }
    return root;
}
;
function resolve(root, obj) {
    console.log(root, obj);
    if (Array.isArray(obj)) {
        root = [];
        for (var i = 0; i < obj.length; i++) {
            if (Boolean(obj[i])) { // 非空
                root.push(obj[i]);
                resolve(root[i], obj[i]);
            }
        }
    }
    else if (typeof obj === 'object' && obj !== null) {
        root = {};
        var keys = Object.keys(obj);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            if (!Boolean(obj[key])) {
                delete obj[key];
            }
        }
    }
    return obj;
}
var res = compactObjxect({ "a": null, "b": [false, 1] });
console.log(res);
