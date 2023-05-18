
//check for password match
function confirmPassword(){
const a = document.querySelector('#password');
const b = document.querySelector('#confirmpassword')
    if (a.value.trim() === ""){
        return false;}
       else return (a.value === b.value);
}

function passwordMatch(){

const spanA = document.querySelector(`.spanpassword`);
const spanB = document.querySelector(`.spanconfirmpassword`);
const a = document.querySelector('#password');
const b = document.querySelector('#confirmpassword')

if (confirmPassword()){
    a.classList.remove('invalid');
    a.classList.add('valid');
    b.classList.remove('invalid');
    b.classList.add('valid');
}
else {
    a.classList.add('invalid');
    a.classList.remove('valid'); 
    b.classList.add('invalid');
    b.classList.remove('valid');    
      
    spanA.textContent ="Passwords don't match Try again";
    spanB.textContent ="Passwords don't match Try again";
}   
}
//on submit check inputs are valid and not empty

//prevent default tooltip

var inputs = document.querySelectorAll('input');

inputs.forEach(function(input) {
  input.addEventListener('invalid', (e)=> {
    e.preventDefault();
    input.classList.add('invalid');
    input.classList.remove('valid');
    const spans = document.querySelector(`.span${input.id}`);
    spans.textContent ="*Required";
    
    

  });
  input.addEventListener('change', ()=> {
    const spans = document.querySelector(`.span${input.id}`);
    if (input.checkValidity()) {
        //password check
        if (input.id === 'confirmpassword'){
            passwordMatch();
        }

        else { input.classList.add('valid');
        input.classList.remove('invalid');     
        //change text for spans
        spans.textContent ="";}

    }
    else {
    input.classList.add('invalid');
    input.classList.remove('valid'); 
    switch(input.id){
        case `email`:
             spans.textContent ="Try again? Johncitizen@email.com";
        break;
        case `phone`:
            spans.textContent ="Try again? 612-90123000";
        break;
        default:
    };
    };
  });
});
