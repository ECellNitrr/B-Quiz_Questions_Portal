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
    //  myCheck: sortobj.myCheck,
     index: sortobj.index,
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