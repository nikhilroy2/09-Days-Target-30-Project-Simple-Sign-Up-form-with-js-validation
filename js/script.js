'use strict'

// firstName not allowed number
{
    let fullName = document.querySelector('.fullName');
    fullName.oninput = function() {
        let regStop = /[^a-z]/gi;
        fullName.value = fullName.value.replace(regStop, '');
    }
}

// button form hide show

{
    let inputField = document.querySelectorAll('.inputField');
    for (let i = 0; i < inputField.length; i++) {
        inputField[i].oninput = ()=> {
            if (!(inputField[0].value.trim() == '') && !(inputField[1].value.trim() == '') && !(inputField[2].value.trim() == '')) {
                // formSubmit is id
                formSubmit.removeAttribute('disabled');
                formSubmit.style.cursor = 'pointer';
            } else {
                formSubmit.setAttribute('disabled', 'true');
                formSubmit.style.cursor = 'not-Allowed';  
            }
        }
    }
}