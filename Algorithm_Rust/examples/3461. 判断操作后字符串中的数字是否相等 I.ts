function hasSameDigits(s: string): boolean {
    while(s.length>2){
        let new_s = "";
        let i = 0;
        while(i<s.length){
            new_s += (parseInt(s[i])+ parseInt(s[i+1]))%10;
            i += 2;
        }
        console.log(new_s);
        s = new_s;
    }
    return s.length == 2 && s[0] == s[1];
};

export {}