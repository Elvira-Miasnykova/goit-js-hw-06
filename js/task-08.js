const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const currentForm = event.currentTarget;
    const formElements = event.currentTarget.elements;
    //console.log(formElements);
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === "" || password === "") {
        alert('Warning: fill in all fields!');
    }
    else {
        const formData = {
            mail,
            password,
        };
        console.log(formData);
        currentForm.reset();
    }

    
    
    
}


