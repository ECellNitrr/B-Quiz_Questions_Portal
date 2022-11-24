const bquizdb = (dbname, table) => {
    const db = new Dexie(dbname);
    db.version(50).stores(table);
    db.open();
  
    return db;
    
  };
  
  const bulkcreate = (dbtable, data) => {
    let flag = empty(data);
    if (flag) {
      dbtable.bulkAdd([data]);
      console.log("data inserted successfully...!");
    } else {
      console.log("Please provide data...!");
    }
    return flag;
  };
  
  // create dynamic elements
  const createEle = (tagname, appendTo, fn) => {
    const element = document.createElement(tagname);
    if (appendTo) appendTo.appendChild(element);
    if (fn) fn(element);
  };
  
  // check textbox validation
  const empty = object => {
    let flag = false;
    for (const value in object) {
      if (object[value] != "" && object.hasOwnProperty(value)) {
        flag = true;
      } else {
        flag = false;
      }
    }
    return flag;
  };
  
  // getData from the database
  const getData = (dbname, fn) => {
    let index = 0;
    let obj = {};
    dbname.count(count => {
      
      if (count) {
        dbname.each(table => {
          
          obj = SortObj(table);
          fn(obj, index++); 
        });
      } else {
        fn(0);
      }
    });
  };
  
  const SortObj = (sortobj) => {
    let obj = {};
    obj = {
        id: sortobj.id,
      question: sortobj.question,
      option1: sortobj.option1,
      option2: sortobj.option2,
      option3: sortobj.option3,
      option4: sortobj.option4,
      image1: sortobj.image1,
      image2: sortobj.image2,
      image3: sortobj.image3,
      image4: sortobj.image4,
      //  myCheck: sortobj.myCheck,
       index: sortobj.index,
       id2: sortobj.id2,
      question2: sortobj.question2,
      option21: sortobj.option21,
      option22: sortobj.option22,
      option23: sortobj.option23,
      option24: sortobj.option24,
      image21: sortobj.image21,
      image22: sortobj.image22,
      image23: sortobj.image23,
      image24: sortobj.image24,
      //  myCheck: sortobj.myCheck,
       index2: sortobj.index2,
       id3: sortobj.id3,
      question3: sortobj.question3,
      option31: sortobj.option31,
      option32: sortobj.option32,
      option33: sortobj.option33,
      option34: sortobj.option34,
      image31: sortobj.image31,
      image32: sortobj.image32,
      image33: sortobj.image33,
      image34: sortobj.image34,
      //  myCheck: sortobj.myCheck,
       index3: sortobj.index3,
       id4: sortobj.id,
      question4: sortobj.question4,
      option41: sortobj.option41,
      option42: sortobj.option42,
      option43: sortobj.option43,
      option44: sortobj.option44,
      image41: sortobj.image41,
      image42: sortobj.image42,
      image43: sortobj.image43,
      image44: sortobj.image44,
      //  myCheck: sortobj.myCheck,
       index4: sortobj.index4,
       id5: sortobj.id5,
      question5: sortobj.question5,
      option51: sortobj.option51,
      option52: sortobj.option52,
      option53: sortobj.option53,
      option54: sortobj.option54,
      image51: sortobj.image51,
      image52: sortobj.image52,
      image53: sortobj.image53,
      image54: sortobj.image54,
      //  myCheck: sortobj.myCheck,
       index5: sortobj.index5,
       id6: sortobj.id6,
      question6: sortobj.question6,
      option61: sortobj.option61,
      option62: sortobj.option62,
      option63: sortobj.option63,
      option64: sortobj.option64,
      image61: sortobj.image61,
      image62: sortobj.image62,
      image63: sortobj.image63,
      image64: sortobj.image64,
      //  myCheck: sortobj.myCheck,
       index6: sortobj.index6,
       id7: sortobj.id7,
      question7: sortobj.question7,
      option71: sortobj.option71,
      option72: sortobj.option72,
      option73: sortobj.option73,
      option74: sortobj.option74,
      image71: sortobj.image71,
      image72: sortobj.image72,
      image73: sortobj.image73,
      image74: sortobj.image74,
      //  myCheck: sortobj.myCheck,
       index7: sortobj.index7,
       id8: sortobj.id8,
      question8: sortobj.question8,
      option81: sortobj.option81,
      option82: sortobj.option82,
      option83: sortobj.option83,
      option84: sortobj.option84,
      image81: sortobj.image81,
      image82: sortobj.image82,
      image83: sortobj.image83,
      image84: sortobj.image84,
      //  myCheck: sortobj.myCheck,
       index8: sortobj.index8,
       id9: sortobj.id9,
      question9: sortobj.question9,
      option91: sortobj.option91,
      option92: sortobj.option92,
      option93: sortobj.option93,
      option94: sortobj.option94,
      image91: sortobj.image91,
      image92: sortobj.image92,
      image93: sortobj.image93,
      image94: sortobj.image94,
      //  myCheck: sortobj.myCheck,
       index9: sortobj.index9,
       id0: sortobj.id0,
      question0: sortobj.question0,
      option01: sortobj.option01,
      option02: sortobj.option02,
      option03: sortobj.option03,
      option04: sortobj.option04,
      image01: sortobj.image01,
      image02: sortobj.image02,
      image03: sortobj.image03,
      image04: sortobj.image04,
      //  myCheck: sortobj.myCheck,
       index0: sortobj.index0,
    };
    return obj;
  }
  
  
  export default bquizdb;
  export {
    bulkcreate,
    createEle,
    getData,
    SortObj
  };
