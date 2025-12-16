function convertDateToBinary(date: string): string {
    const res = date.split('-').map(el=>{
        return parseInt(el).toString(2);
    }).join('-');
    return res;
};


const res = convertDateToBinary("2080-02-29");
console.log(res);
