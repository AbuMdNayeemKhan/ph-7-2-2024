let myArray = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
function deleteInvalids(para){
    let allNum = [];
    for (let item of para) {
        if(typeof item === 'number'){
            allNum.push(item);
        }
    }
    return allNum;
}
let print = deleteInvalids(myArray);
console.log(print);