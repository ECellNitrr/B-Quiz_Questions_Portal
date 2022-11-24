import bquizdb, {
  bulkcreate,
  createEle,
  getData,
  SortObj
} from "./module.js";


let db = bquizdb("bquizdb", {
  products: `id,question, option1,option2,option3,option4,image1,image2,image3,image4,index,id2,question2, option21,option22,option23,option24,image21,image22,image23,image24,index2,id3,question3, option31,option32,option33,option34,image31,image32,image33,image34,index3,id4,question4, option41,option42,option43,option44,image41,image42,image43,image44,index4,id5,question5, option51,option52,option53,option54,image51,image52,image53,image54,index5,id6,question6, option61,option62,option63,option64,image61,image62,image63,image64,index6,id7,question7, option71,option72,option73,option74,image71,image72,image73,image74,index7,id8,question8, option81,option82,option83,option84,image81,image82,image83,image84,index8,id9,question9, option91,option92,option93,option94,image91,image92,image93,image94,index9,id0,question0, option01,option02,option03,option04,image01,image02,image03,image04,index0`
});

// input tags
const userid = document.getElementById("userid");
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
// const myCheck = document.getElementById("myCheck");
const index = document.getElementById("index");
const userid2 = document.getElementById("userid2");
const question2 = document.getElementById("question2");
const option21 = document.getElementById("option21");
const option22 = document.getElementById("option22");
const option23 = document.getElementById("option23");
const option24 = document.getElementById("option24");
const image21 = document.getElementById("image21");
const image22 = document.getElementById("image22");
const image23 = document.getElementById("image23");
const image24 = document.getElementById("image24");
// const myCheck = document.getElementById("myCheck");
const index2 = document.getElementById("index2");
const userid3 = document.getElementById("userid3");
const question3 = document.getElementById("question3");
const option31 = document.getElementById("option31");
const option32 = document.getElementById("option32");
const option33 = document.getElementById("option33");
const option34 = document.getElementById("option34");
const image31 = document.getElementById("image31");
const image32 = document.getElementById("image32");
const image33 = document.getElementById("image33");
const image34 = document.getElementById("image34");
// const myCheck = document.getElementById("myCheck");
const index3 = document.getElementById("index3");
const userid4 = document.getElementById("userid4");
const question4 = document.getElementById("question4");
const option41 = document.getElementById("option41");
const option42 = document.getElementById("option42");
const option43 = document.getElementById("option43");
const option44 = document.getElementById("option44");
const image41 = document.getElementById("image41");
const image42 = document.getElementById("image42");
const image43 = document.getElementById("image43");
const image44 = document.getElementById("image44");
// const myCheck = document.getElementById("myCheck");
const index4 = document.getElementById("index4");
const userid5 = document.getElementById("userid5");
const question5 = document.getElementById("question5");
const option51 = document.getElementById("option51");
const option52 = document.getElementById("option52");
const option53 = document.getElementById("option53");
const option54 = document.getElementById("option54");
const image51 = document.getElementById("image51");
const image52 = document.getElementById("image52");
const image53 = document.getElementById("image53");
const image54 = document.getElementById("image54");
// const myCheck = document.getElementById("myCheck");
const index5 = document.getElementById("index5");
const userid6 = document.getElementById("userid6");
const question6 = document.getElementById("question6");
const option61 = document.getElementById("option61");
const option62 = document.getElementById("option62");
const option63 = document.getElementById("option63");
const option64 = document.getElementById("option64");
const image61 = document.getElementById("image61");
const image62 = document.getElementById("image62");
const image63 = document.getElementById("image63");
const image64 = document.getElementById("image64");
// const myCheck = document.getElementById("myCheck");
const index6 = document.getElementById("index6");
const userid7 = document.getElementById("userid7");
const question7 = document.getElementById("question7");
const option71 = document.getElementById("option71");
const option72 = document.getElementById("option72");
const option73 = document.getElementById("option73");
const option74 = document.getElementById("option74");
const image71 = document.getElementById("image71");
const image72 = document.getElementById("image72");
const image73 = document.getElementById("image73");
const image74 = document.getElementById("image74");
// const myCheck = document.getElementById("myCheck");
const index7 = document.getElementById("index7");
const userid8 = document.getElementById("userid8");
const question8 = document.getElementById("question8");
const option81 = document.getElementById("option81");
const option82 = document.getElementById("option82");
const option83 = document.getElementById("option83");
const option84 = document.getElementById("option84");
const image81 = document.getElementById("image81");
const image82 = document.getElementById("image82");
const image83 = document.getElementById("image83");
const image84 = document.getElementById("image84");
// const myCheck = document.getElementById("myCheck");
const index8 = document.getElementById("index8");
const userid9 = document.getElementById("userid9");
const question9 = document.getElementById("question9");
const option91 = document.getElementById("option91");
const option92 = document.getElementById("option92");
const option93 = document.getElementById("option93");
const option94 = document.getElementById("option94");
const image91 = document.getElementById("image91");
const image92 = document.getElementById("image92");
const image93 = document.getElementById("image93");
const image94 = document.getElementById("image94");
// const myCheck = document.getElementById("myCheck");
const index9 = document.getElementById("index9");
const userid0 = document.getElementById("userid0");
const question0 = document.getElementById("question0");
const option01 = document.getElementById("option01");
const option02 = document.getElementById("option02");
const option03 = document.getElementById("option03");
const option04 = document.getElementById("option04");
const image01 = document.getElementById("image01");
const image02 = document.getElementById("image02");
const image03 = document.getElementById("image03");
const image04 = document.getElementById("image04");
// const myCheck = document.getElementById("myCheck");
const index0 = document.getElementById("index0");


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
    image1: image1.value,
    image2: image2.value,
    image3: image3.value,
    image4: image4.value,
    // myCheck: myCheck.value,
    index: index.value,
   // userid2: userid2.value,
    question2: question2.value,
    option21: option21.value,
    option22: option22.value,
    option23: option23.value,
    option24: option24.value,
    image21: image21.value,
    image22: image22.value,
    image23: image23.value,
    image24: image24.value,
    // myCheck: myCheck.value,
    index2: index2.value,
   // userid3: userid3.value,
    question3: question3.value,
    option31: option31.value,
    option32: option32.value,
    option33: option33.value,
    option34: option34.value,
    image31: image31.value,
    image32: image32.value,
    image33: image33.value,
    image34: image34.value,
    // myCheck: myCheck.value,
    index3: index3.value,
  //  userid4: userid4.value,
    question4: question4.value,
    option41: option41.value,
    option42: option42.value,
    option43: option43.value,
    option44: option44.value,
    image41: image41.value,
    image42: image42.value,
    image43: image43.value,
    image44: image44.value,
    // myCheck: myCheck.value,
    index4: index4.value,
  //  userid5: userid5.value,
    question5: question5.value,
    option51: option51.value,
    option52: option52.value,
    option53: option53.value,
    option54: option54.value,
    image51: image51.value,
    image52: image52.value,
    image53: image53.value,
    image54: image54.value,
    // myCheck: myCheck.value,
    index5: index5.value,
  //  userid6: userid6.value,
    question6: question6.value,
    option61: option61.value,
    option62: option62.value,
    option63: option63.value,
    option64: option64.value,
    image61: image61.value,
    image62: image62.value,
    image63: image63.value,
    image64: image64.value,
    // myCheck: myCheck.value,
    index6: index6.value,
  //  userid7: userid7.value,
    question7: question7.value,
    option71: option71.value,
    option72: option72.value,
    option73: option73.value,
    option74: option74.value,
    image71: image71.value,
    image72: image72.value,
    image73: image73.value,
    image74: image74.value,
    // myCheck: myCheck.value,
    index7: index7.value,
  //  userid8: userid8.value,
    question8: question8.value,
    option81: option81.value,
    option82: option82.value,
    option83: option83.value,
    option84: option84.value,
    image81: image81.value,
    image82: image82.value,
    image83: image83.value,
    image84: image84.value,
    // myCheck: myCheck.value,
    index8: index8.value,
  //  userid9: userid9.value,
    question9: question9.value,
    option91: option91.value,
    option92: option92.value,
    option93: option93.value,
    option94: option94.value,
    image91: image91.value,
    image92: image92.value,
    image93: image93.value,
    image94: image94.value,
    // myCheck: myCheck.value,
    index9: index9.value,
  //  userid0: userid0.value,
    question0: question0.value,
    option01: option01.value,
    option02: option02.value,
    option03: option03.value,
    option04: option04.value,
    image01: image01.value,
    image02: image02.value,
    image03: image03.value,
    image04: image04.value,
    // myCheck: myCheck.value,
    index0: index0.value

    
  });
  
  question.value = option1.value = option2.value = option3.value = option4.value  =image1.value=image2.value=image3.value=image4.value= index.value= question2.value = option21.value = option22.value = option23.value = option24.value  =image21.value=image22.value=image23.value=image24.value= index2.value= question3.value = option31.value = option32.value = option33.value = option34.value  =image31.value=image32.value=image33.value=image34.value= index3.value= question4.value = option41.value = option42.value = option43.value = option44.value  =image41.value=image42.value=image43.value=image44.value= index4.value= question5.value = option51.value = option52.value = option53.value = option54.value  =image51.value=image52.value=image53.value=image54.value= index5.value= question6.value = option61.value = option62.value = option63.value = option64.value  =image61.value=image62.value=image63.value=image64.value= index6.value= question7.value = option71.value = option72.value = option73.value = option74.value  =image71.value=image72.value=image73.value=image74.value= question8.value = option81.value = option82.value = option83.value = option84.value  =image81.value=image82.value=image83.value=image84.value= index8.value= question9.value = option91.value = option92.value = option93.value = option94.value  =image91.value=image92.value=image93.value=image94.value= index9.value= question0.value = option01.value = option02.value = option03.value = option04.value  =image01.value=image02.value=image03.value=image04.value= index0.value="";

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
      image1: image1.value,
    image2: image2.value,
    image3: image3.value,
    image4: image4.value,
      // myCheck: myCheck.value,
      index: index.value,
      userid2: userid2.value,
      question2: question2.value,
    option21: option21.value,
    option22: option22.value,
    option23: option23.value,
    option24: option24.value,
    image21: image21.value,
    image22: image22.value,
    image23: image23.value,
    image24: image24.value,
    // myCheck: myCheck.value,
    index2: index2.value,
    userid3: userid3.value,
    question3: question3.value,
    option31: option31.value,
    option32: option32.value,
    option33: option33.value,
    option34: option34.value,
    image31: image31.value,
    image32: image32.value,
    image33: image33.value,
    image34: image34.value,
    // myCheck: myCheck.value,
    index3: index3.value,
    userid4: userid4.value,
    question4: question4.value,
    option41: option41.value,
    option42: option42.value,
    option43: option43.value,
    option44: option44.value,
    image41: image41.value,
    image42: image42.value,
    image43: image43.value,
    image44: image44.value,
    // myCheck: myCheck.value,
    index4: index4.value,
    userid5: userid5.value,
    question5: question5.value,
    option51: option51.value,
    option52: option52.value,
    option53: option53.value,
    option54: option54.value,
    image51: image51.value,
    image52: image52.value,
    image53: image53.value,
    image54: image54.value,
    // myCheck: myCheck.value,
    index5: index5.value,
    userid6: userid6.value,
    question6: question6.value,
    option61: option61.value,
    option62: option62.value,
    option63: option63.value,
    option64: option64.value,
    image61: image61.value,
    image62: image62.value,
    image63: image63.value,
    image64: image64.value,
    // myCheck: myCheck.value,
    index6: index6.value,
    userid7: userid7.value,
    question7: question7.value,
    option71: option71.value,
    option72: option72.value,
    option73: option73.value,
    option74: option74.value,
    image71: image71.value,
    image72: image72.value,
    image73: image73.value,
    image74: image74.value,
    // myCheck: myCheck.value,
    index7: index7.value,
    userid8: userid8.value,
    question8: question8.value,
    option81: option81.value,
    option82: option82.value,
    option83: option83.value,
    option84: option84.value,
    image81: image81.value,
    image82: image82.value,
    image83: image83.value,
    image84: image84.value,
    // myCheck: myCheck.value,
    index8: index8.value,
    userid9: userid9.value,
    question9: question9.value,
    option91: option91.value,
    option92: option92.value,
    option93: option93.value,
    option94: option94.value,
    image91: image91.value,
    image92: image92.value,
    image93: image93.value,
    image94: image94.value,
    // myCheck: myCheck.value,
    index9: index9.value,
    userid0: userid0.value,
    question0: question0.value,
    option01: option01.value,
    option02: option02.value,
    option03: option03.value,
    option04: option04.value,
    image01: image01.value,
    image02: image02.value,
    image03: image03.value,
    image04: image04.value,
    // myCheck: myCheck.value,
    index0: index0.value
    }).then((updated) => {
      // let get = updated ? `data updated` : `couldn't update data`;
      let get = updated ? true : false;

      // display message
      let updatemsg = document.querySelector(".updatemsg");
      getMsg(get, updatemsg);

      question.value = option1.value = option2.value = option3.value = option4.value  =image1.value=image2.value=image3.value=image4.value= index.value= question2.value = option21.value = option22.value = option23.value = option24.value  =image21.value=image22.value=image23.value=image24.value= index2.value= question3.value = option31.value = option32.value = option33.value = option34.value  =image31.value=image32.value=image33.value=image34.value= index3.value= question4.value = option41.value = option42.value = option43.value = option44.value  =image41.value=image42.value=image43.value=image44.value= index4.value= question5.value = option51.value = option52.value = option53.value = option54.value  =image51.value=image52.value=image53.value=image54.value= index5.value= question6.value = option61.value = option62.value = option63.value = option64.value  =image61.value=image62.value=image63.value=image64.value= index6.value= question7.value = option71.value = option72.value = option73.value = option74.value  =image71.value=image72.value=image73.value=image74.value= index7.value= question8.value = option81.value = option82.value = option83.value = option84.value  =image81.value=image82.value=image83.value=image84.value= index8.value= question9.value = option91.value = option92.value = option93.value = option94.value  =image91.value=image92.value=image93.value=image94.value= index9.value= question0.value = option01.value = option02.value = option03.value = option04.value  =image01.value=image02.value=image03.value=image04.value= index0.value="";

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
    products: `userid,question, option1,option2,option3,option4,image1,image2,image3,image4,index,userid2,question2, option21,option22,option23,option24,image21,image22,image23,image24,index2,useerid3,question3, option31,option32,option33,option34,image31,image32,image33,image34,index3,userid4,question4, option41,option42,option43,option44,image41,image42,image43,image44,index4,userid5,question5, option51,option52,option53,option54,image51,image52,image53,image54,index5,userid6,question6, option61,option62,option63,option64,image61,image62,image63,image64,index6,userid7,question7, option71,option72,option73,option74,image71,image72,image73,image74,index7,userid8,question8, option81,option82,option83,option84,image81,image82,image83,image84,index8,userid9,question9, option91,option92,option93,option94,image91,image92,image93,image94,index9,userid0,question0, option01,option02,option03,option04,image01,image02,image03,image04,index0`
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
            td.textContent = data.userid === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option1 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option2 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option3 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option4 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image1 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image2 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image3 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image4 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid2 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question2 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option21 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option22 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option23 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option24 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image21 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image22 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image23 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image24 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index2 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid3 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question3 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option31 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option32 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option33 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option34 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image31 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image32 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image33 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image34 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index3 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid4 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question4 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option41 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option42 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option43 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option44 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image41 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image42 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image43 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image44 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index4 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid5 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question5 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option51 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option52 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option53 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option54 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image51 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image52 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image53 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image54 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index5 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid6 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question6 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option61 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option62 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option63 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option64 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image61 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image62 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image63 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image64 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index6 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid7 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question7 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option71 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option72 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option73 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option74 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image71 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image72 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image73 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image74 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index7 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid8 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question8 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option81 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option82 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option83 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option84 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image81 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image82 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image83 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image84 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index8 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid9 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question9 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option91 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option92 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option93 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option94 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image91 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image92 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image93 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image94 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index9 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.userid0 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.question0 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option01 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option02 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option03 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.option04 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image01 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image02 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image03 === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.image04 === data[value] ? `$ ${data[value]}` : data[value];
            // td.textContent = data.image === data[value] ? `$ ${data[value]}` : data[value];
            td.textContent = data.index0 === data[value] ? `$ ${data[value]}` : data[value];
           
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

// var isImageCheckBox=document.getElementById("isImageCheck");
// isImageCheckBox.onclick=function(){
//   var imagesBlock=document.getElementById("imagesBlock");
//   if(isImageCheckBox.checked){
//     imagesBlock.style.display="block";
//   }else{
//     imagesBlock.style.display="none";
//   }
// }






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
    image1.value = newdata.image1 || "";
    image2.value = newdata.image2 || "";
    image3.value = newdata.image3 || "";
    image4.value = newdata.image4 || "";
    // myCheck.value = newdata.myCheck || "";
    index.value=newdata.index || "";
    userid2.value = newdata.id || 0;
    question2.value = newdata.question2 || "";
    option21.value = newdata.option21 || "";
    option22.value = newdata.option22 || "";
    option23.value = newdata.option23 || "";
    option24.value = newdata.option24 || "";
    image21.value = newdata.image21 || "";
    image22.value = newdata.image22 || "";
    image23.value = newdata.image23 || "";
    image24.value = newdata.image24 || "";
    // myCheck.value = newdata.myCheck || "";
    index2.value=newdata.index2 || "";
    userid3.value = newdata.id || 0;
    question3.value = newdata.question3 || "";
    option31.value = newdata.option31 || "";
    option32.value = newdata.option32 || "";
    option33.value = newdata.option33 || "";
    option34.value = newdata.option34 || "";
    image31.value = newdata.image31 || "";
    image32.value = newdata.image32 || "";
    image33.value = newdata.image33 || "";
    image34.value = newdata.image34 || "";
    // myCheck.value = newdata.myCheck || "";
    index3.value=newdata.index3 || "";
    userid4.value = newdata.id || 0;
    question4.value = newdata.question4 || "";
    option41.value = newdata.option41 || "";
    option42.value = newdata.option42 || "";
    option43.value = newdata.option43 || "";
    option44.value = newdata.option44 || "";
    image41.value = newdata.image41 || "";
    image42.value = newdata.image42 || "";
    image43.value = newdata.image43 || "";
    image44.value = newdata.image44 || "";
    // myCheck.value = newdata.myCheck || "";
    index4.value=newdata.index4 || "";
    userid5.value = newdata.id || 0;
    question5.value = newdata.question5 || "";
    option51.value = newdata.option51 || "";
    option52.value = newdata.option52 || "";
    option53.value = newdata.option53 || "";
    option54.value = newdata.option54 || "";
    image51.value = newdata.image51 || "";
    image52.value = newdata.image52 || "";
    image53.value = newdata.image53 || "";
    image54.value = newdata.image54 || "";
    // myCheck.value = newdata.myCheck || "";
    index5.value=newdata.index5 || "";
    userid6.value = newdata.id || 0;
    question6.value = newdata.question6 || "";
    option61.value = newdata.option61 || "";
    option62.value = newdata.option62 || "";
    option63.value = newdata.option63 || "";
    option64.value = newdata.option64 || "";
    image61.value = newdata.image61 || "";
    image62.value = newdata.image62 || "";
    image63.value = newdata.image63 || "";
    image64.value = newdata.image64 || "";
    // myCheck.value = newdata.myCheck || "";
    index6.value=newdata.index6 || "";
    userid7.value = newdata.id || 0;
    question7.value = newdata.question7 || "";
    option71.value = newdata.option71 || "";
    option72.value = newdata.option72 || "";
    option73.value = newdata.option73 || "";
    option74.value = newdata.option74 || "";
    image71.value = newdata.image71 || "";
    image72.value = newdata.image72 || "";
    image73.value = newdata.image73 || "";
    image74.value = newdata.image74 || "";
    // myCheck.value = newdata.myCheck || "";
    index7.value=newdata.index7 || "";
    userid8.value = newdata.id || 0;
    question8.value = newdata.question8 || "";
    option81.value = newdata.option81 || "";
    option82.value = newdata.option82 || "";
    option83.value = newdata.option83 || "";
    option84.value = newdata.option84 || "";
    image81.value = newdata.image81 || "";
    image82.value = newdata.image82 || "";
    image83.value = newdata.image83 || "";
    image84.value = newdata.image84 || "";
    // myCheck.value = newdata.myCheck || "";
    index8.value=newdata.index8 || "";
    userid9.value = newdata.id || 0;
    question9.value = newdata.question9 || "";
    option91.value = newdata.option91 || "";
    option92.value = newdata.option92 || "";
    option93.value = newdata.option93 || "";
    option94.value = newdata.option94 || "";
    image91.value = newdata.image91 || "";
    image92.value = newdata.image92 || "";
    image93.value = newdata.image93 || "";
    image94.value = newdata.image94 || "";
    // myCheck.value = newdata.myCheck || "";
    index9.value=newdata.index9 || "";
    userid0.value = newdata.id || 0;
    question0.value = newdata.question0 || "";
    option01.value = newdata.option01 || "";
    option02.value = newdata.option02 || "";
    option03.value = newdata.option03 || "";
    option04.value = newdata.option04 || "";
    image01.value = newdata.image01 || "";
    image02.value = newdata.image02 || "";
    image03.value = newdata.image03 || "";
    image04.value = newdata.image04 || "";
    // myCheck.value = newdata.myCheck || "";
    index0.value=newdata.index0 || "";
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
