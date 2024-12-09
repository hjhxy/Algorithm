function isMatch(s: string, p: string): boolean {
    let i = 0;
    let j = 0;
    while (i < s.length && j < p.length) {
        if (p[j] == "*") {
            while (i < s.length && j < p.length) {
                if (p[j - 1] == ".") {
                    return true;
                } else {
                    if (s[i] ==)
                }
            }
        }
        else if (p[i] == ".") {
            i++;
            j++;
        }
        else if (s[i] != p[i]) return false;
        else i++;
    }
    return i == s.length && j == p.length;
};



let res = isMatch("aa", "a");
console.log(res);
