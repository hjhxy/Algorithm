function networkDelayTime(times, n, k) {
    var map = {};
    for (var i = 1; i <= n; i++) {
        map[i] = {
            data: [],
            distance: 0,
            color: 'white',
        };
    }
    for (var _i = 0, times_1 = times; _i < times_1.length; _i++) {
        var _a = times_1[_i], u = _a[0], v = _a[1], w = _a[2];
        map[u].data.push([v, w]);
    }
    console.log(map);
    var queue = [map[k]];
    var count;
    while (queue.length) {
        count = queue.length;
        while (count--) {
            var node = queue.shift();
            if (node.color == 'black')
                continue;
            for (var j = 0; j < node.data.length; j++) {
                var _b = node.data[j], next = _b[0], time = _b[1];
                queue.push(map[next]);
                if (map[next].color !== 'white' && node.distance + time < map[next].distance) {
                    map[next].distance = node.distance + time;
                }
                if (map[next].color == 'white') {
                    map[next].distance = node.distance + time;
                    map[next].color = 'gray';
                }
                console.log(next, node.distance + time, map[next]);
            }
            node.color = 'black';
        }
    }
    var max = 0;
    for (var key in map) {
        if (map[key].color === 'white' && Number(key) != k) {
            return -1;
        }
        max = Math.max(map[key].distance, max);
    }
    console.log(map);
    return max;
}
;
var res = networkDelayTime([[1, 2, 1], [2, 3, 7], [1, 3, 4], [2, 1, 2]], 3, 2);
console.log('res', res);
