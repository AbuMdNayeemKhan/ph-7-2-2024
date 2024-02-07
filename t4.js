let myObj = {
    name: "kolimuddin" ,
    birthYear: 1999 ,
    siteName: "google"
}
function password(para){
    let pass = para.siteName+'#'+para.name+'@'+para.birthYear;
    let newPass = pass.charAt(0).toUpperCase() + pass.slice(1);
    return newPass;
}

let print = password(myObj);

console.log(print);