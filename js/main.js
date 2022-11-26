import {
  config
} from './config.js'

function getFormUI(formId){
  return "<div class=\"d-flex flex-column align-items-center\">"+
    "<h3 class=\"text-center\">Question "+(formId+1)+"</h3>"+
    
    "<form class=\"w-50\" id=\"form_"+formId+"\">"+
    "<textarea name=\"question\" id=\"question_"+formId+"\" class=\"form-control\" cols=\"30\" rows=\"5\" autocomplete=\"off\" placeholder=\"Question\"></textarea>"+

    // Images
    "<legend>Images</legend>"+
    "<div class=\"\">"+
      "<input type=\"checkbox\" id=\"is-image_"+formId+"\" >"+
      "<label for=\"is-image_"+formId+"\">Images</label>"+
    "</div>"+

    "<div id=\"images-wrapper_"+formId+"\" style=\"display:none\">"+
      "<div class=\"d-flex flex-column align-items-center\" id=\"image-container_"+formId+"\">"+
        "<input type=\"text\" id=\"image1_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Image 1\" />"+
        "<input type=\"text\" id=\"image2_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Image 2\" />"+
        "<input type=\"text\" id=\"image3_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Image 3\" />"+
        "<input type=\"text\" id=\"image4_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Image 4\" />"+
        "<input type=\"text\" id=\"image5_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Image 5\" />"+
        "<input type=\"text\" id=\"image6_"+formId+"\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Image 6\" />"+
      "</div>"+
    "</div>"+

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

function getFormData(formIdx){
  const question = document.querySelector("#question_"+formIdx);
  const option1 = document.querySelector("#option1_"+formIdx);
  const option2 = document.querySelector("#option2_"+formIdx);
  const option3 = document.querySelector("#option3_"+formIdx);
  const option4 = document.querySelector("#option4_"+formIdx);
  const index = document.querySelector("#correct-index_"+formIdx);

  const isImage = document.querySelector("#is-image_"+formIdx);
  const images=[];
  if(isImage.checked){
    for(let i=1; i<=6; i++){
      const image = document.querySelector("#image"+i+"_"+formIdx);
      if(image.value !== ""){
        images.push(image.value);
      }
    }
  }
  

  var data = {
    answers: [option1.value, option2.value, option3.value, option4.value],
    isImage: isImage.checked,
    images: images,
    correctIndex: parseInt(index.value),
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
btncreate.onclick = async (event) => {
  const collectionName = document.querySelector("#collection-name").value;
  const documnetName = document.querySelector("#document-name").value;

  const data={};
  for(let i=0; i<10; i++){
    const formData = getFormData(i);
    data[`q${i+1}`] = formData;
  }

  const db = firebase.firestore();
  // Create a loader pop up which will be removed after the data is uploaded
  swal({
    title: 'Uploading data',
    html: 'Please wait...',
    icon: 'info',
    allowOutsideClick: false,
  });

  // Upload data to firestore
  const update=await db.collection(collectionName).doc(documnetName).set(data);

  // Refresh the page
  location.reload();

  // Show the success message
  swal({
    title: 'Success',
    text: 'Data uploaded successfully',
    icon: 'success',
    confirmButtonText: 'Ok'
  });

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

// textbox id
function textID(textboxid) {
}


function init(){
  const formContainer = document.querySelector("#form-container");
  for(let i=0; i<10; i++){
    formContainer.innerHTML += getFormUI(i);
  }

  firebase.initializeApp(config);
}

function isImageCheckBoxFun(formIdx, value){
  const imagesWrapper = document.querySelector("#images-wrapper_"+formIdx);
  if(value){
    imagesWrapper.style.display = "block";
  }else{
    imagesWrapper.style.display = "none";
  }

}

function initAllEvents(){
  const formContainer = document.querySelector("#form-container");
  for(let i=0; i<10; i++){
    const isImageCheckBox = document.querySelector("#is-image_"+i);
    isImageCheckBox.onclick = (event) => {
      isImageCheckBoxFun(i, event.target.checked);
    };
  }
}

init();
initAllEvents();
