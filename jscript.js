
//check for password match
function confirmPassword(){
    let a = document.querySelector('#password');
    
    let b = document.querySelector('#confirm-password')
    if (a != ""){
        return (a === b);
    }
    else return false;
}

//on submit check inputs are valid and not empty

//prevent default tooltip

var form = document.getElementById('forms'); 

form.addEventListener('submit', function(event) {
  var inputs = form.querySelectorAll('input');

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    if (input.checkValidity() && input.value.trim() !== '') {
      // Input is valid and not empty
      input.classList.remove('invalid');
    } else {
      // Input is invalid or empty
      input.classList.add('invalid');
      event.preventDefault(); // Prevent form submission
    }
  }
});

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
        input.classList.add('valid');
        input.classList.remove('invalid');     
        //change text for spans
        spans.textContent ="";
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