import {
  config
} from './config.js'

function getFormUI(formId){
  return "<div class=\"d-flex flex-column align-items-center\">"+
    "<h3 class=\"text-center\">Question "+(formId+1)+"</h3>"+
    
    "<form class=\"w-50\" id=\"form_"+formId+"\">"+
    "<input type=\"text\" id=\"questionid_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"ID\" />"+
    "<textarea name=\"question\" id=\"question_"+formId+"\" class=\"form-control\" cols=\"30\" rows=\"5\" autocomplete=\"off\" placeholder=\"Question\"></textarea>"+

    "<legend> Options </legend>"+
    "<input type=\"text\" id=\"option1_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Option 1\" />"+
    "<input type=\"text\" id=\"option2_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Option 2\" />"+
    "<input type=\"text\" id=\"option3_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Option 3\" />"+
    "<input type=\"text\" id=\"option4_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Option 4\" />"+

    // Corrent index input
    "<input type=\"number\" id=\"correct-index_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Correct Index\" />"+
    "</form>"+
  "</div>";
}

function initFun(){
  const formContainer = document.querySelector("#form-container");
  for(let i=0; i<10; i++){
    formContainer.innerHTML += getFormUI(i);
  }
}

function getFormData(formIdx){
  const question = document.querySelector("#question_"+formIdx);
  const option1 = document.querySelector("#option1_"+formIdx);
  const option2 = document.querySelector("#option2_"+formIdx);
  const option3 = document.querySelector("#option3_"+formIdx);
  const option4 = document.querySelector("#option4_"+formIdx);
  const index = document.querySelector("#correct-index_"+formIdx);

  var data = {
    answers: [option1.value, option2.value, option3.value, option4.value],
    correctIndex: index.value,
    question: question.value,
  };

  return data;
}

// create button
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

// user data

// event listerner for create button
btncreate.onclick = (event) => {
  const data={};
  for(let i=0; i<10; i++){
    const formData = getFormData(i);
    data[formData.question] = formData;
  }

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  const db = firebase.firestore();
  db.collection("questions").doc("questions").set(data)
};

// button update
btnupdate.onclick = () => {

};

// delete button
btndelete.onclick = () => {
};

window.onload = (event) => {

};

const editbtn = (event) => {
};

// delete icon remove element
const deletebtn = (event) => {
};

initFun();