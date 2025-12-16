function breakPalindrome(palindrome: string): string {
    if(palindrome.length<=1) return "";
    for(let i=0;i<Math.floor(palindrome.length/2);i++){
        let char = 'a'.charCodeAt(0);
        if(palindrome[i]==='a'){
            continue;
        }
        // console.log(i, char, palindrome.charCodeAt(i), palindrome[i]);
        if(char!=palindrome.charCodeAt(i)) {
            return palindrome.slice(0, i) + String.fromCharCode(char) + palindrome.slice(i+1);
        }
    }
    return palindrome.slice(0, -1) + 'b';
};

const res = breakPalindrome("aba");
console.log(res);

export default {}