import throttle from 'lodash.throttle';

const FEEDBACK_FORM = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500) );

outputMessage();

function onFormSubmit(event) {
    event.preventDefault();    
    event.currentTarget.reset();    
    localStorage.removeItem(FEEDBACK_FORM);
    console.log(formData);

};

function onFormInput(event) {
    formData[event.target.name] = event.target.value;    
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));    
}

function outputMessage () {
    const saveMessage = localStorage.getItem(FEEDBACK_FORM);
    const objMessage = JSON.parse(saveMessage);
  
    if (saveMessage) {        
        email.value = objMessage.email; 
        textarea.value = objMessage.message; 
        
}
}









