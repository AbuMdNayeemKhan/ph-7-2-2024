let babyName = 'nayeemA';
function checkName(para){
    let eachWord = para.slice(-1);
    let lastWord = eachWord.toLowerCase();
    if(lastWord === 'a' || lastWord === 'y' || lastWord === 'i' || lastWord === 'e' || lastWord === 'o' || lastWord === 'u' || lastWord === 'w'){
        return 'Good Name';
    } else {
        return 'Bad Name';
    }
}
console.log(checkName(babyName));