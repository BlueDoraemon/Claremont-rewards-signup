//check for password match
function confirmPassword(a,b){
    if (a != ""){
        return (a === b);
    }
    else return false;
}