import throttle from 'lodash.throttle';

const FEEDBACK_FORM = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

let formData = {};

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


function outputMessage() {
 try {
 const saveMessage = localStorage.getItem(FEEDBACK_FORM);
 if (!saveMessage) {
 return;
    }

 formData = JSON.parse(saveMessage);

 Object.entries(formData).forEach(([key, value]) => {
 form.elements[key].value = value;
    });
  } catch (error) {}
} 















