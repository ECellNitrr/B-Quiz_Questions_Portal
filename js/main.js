import bquizdb, {
  bulkcreate,
  createEle,
  getData,
  SortObj
} from "./module.js";


let db = bquizdb("bquizdb", {
  products: `++id,question, option1,option2,option3,option4,index`
});

// input tags
const userid = document.getElementById("userid");
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
// const myCheck = document.getElementById("myCheck");
const index = document.getElementById("index");


// create button
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

// user data

// event listerner for create button
btncreate.onclick = event => {
  // insert values
  let flag = bulkcreate(db.products, {
    question: question.value,
    option1: option1.value,
    option2: option2.value,
    option3: option3.value,
    option4: option4.value,
    // myCheck: myCheck.value,
    index: index.value
  });
  
   question.value = option1.value = option2.value = option3.value = option4.value  = index.value="";

  // set id textbox value
  getData(db.products, data => {
    userid.value = data.id + 1 || 1;
  });
  table();

  let insertmsg = document.querySelector(".insertmsg");
  getMsg(flag, insertmsg);
};

// event listerner for create button
btnread.onclick = table;

// button update
btnupdate.onclick = () => {
  const id = parseInt(userid.value || 0);
  if (id) {
    // call dexie update method
    db.products.update(id, {
      question: question.value,
      option1: option1.value,
      option2: option2.value,
      option3: option3.value,
      option4: option4.value,
      // myCheck: myCheck.value,
      index: index.value,
    }).then((updated) => {
      // let get = updated ? `data updated` : `couldn't update data`;
      let get = updated ? true : false;

      // display message
      let updatemsg = document.querySelector(".updatemsg");
      getMsg(get, updatemsg);

      question.value=option1.value=option2.value=option3.value=option4.value = index.value="";
      //console.log(get);
    })
  } else {
    console.log(`Please Select id: ${id}`);
  }
}

// delete button
btndelete.onclick = () => {
  db.delete();
  db = bquizdb("bquizdb", {
    products: `++id,question, option1,option2,option3,option4,index`
  });
  db.open();
  table();
  textID(userid);
  // display message
  let deletemsg = document.querySelector(".deletemsg");
  getMsg(true, deletemsg);
}

window.onload = event => {
  // set id textbox value
  textID(userid);
};




// create dynamic table
function table() {
  const tbody = document.getElementById("tbody");
  const notfound = document.getElementById("notfound");
  notfound.textContent = "";
  // remove all childs from the dom first
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }


  getData(db.products, (data, index) => {
    if (data) {
      createEle("tr", tbody, tr => {
        for (const value in data) {
          createEle("td", tr, td => {
            td.textContent = data.question === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option1 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option2 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option3 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option4 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index === data[value] ? `$ ${data[value]}` : data[value];
          });
        }
        createEle("td", tr, td => {
          createEle("i", td, i => {
            i.className += "fas fa-edit btnedit";
            i.setAttribute(`data-id`, data.id);
            // store number of edit buttons
            i.onclick = editbtn;
          });
        })
        createEle("td", tr, td => {
          createEle("i", td, i => {
            i.className += "fas fa-trash-alt btndelete";
            i.setAttribute(`data-id`, data.id);
            // store number of edit buttons
            i.onclick = deletebtn;
          });
        })
      });
    } else {
      notfound.textContent = "No record found in the database...!";
    }

  });
}
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("msg");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

const editbtn = (event) => {
  let id = parseInt(event.target.dataset.id);
  db.products.get(id, function (data) {
    let newdata = SortObj(data);
    userid.value = newdata.id || 0;
    question.value = newdata.question || "";
    option1.value = newdata.option1 || "";
    option2.value = newdata.option2 || "";
    option3.value = newdata.option3 || "";
    option4.value = newdata.option4 || "";
    // myCheck.value = newdata.myCheck || "";
    index.value=newdata.index || "";
  });
}

// delete icon remove element 
const deletebtn = event => {
  let id = parseInt(event.target.dataset.id);
  db.products.delete(id);
  table();
}

// textbox id
function textID(textboxid) {
  getData(db.products, data => {
    textboxid.value = data.id + 1 || 1;
  });
}

// function msg
function getMsg(flag, element) {
  if (flag) {
    // call msg 
    element.className += " movedown";

    setTimeout(() => {
      element.classList.forEach(classname => {
        classname == "movedown" ? undefined : element.classList.remove('movedown');
      })
    }, 4000);
  }
}