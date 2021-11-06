/************************************************** 
* Spreadsheet DB
**************************************************/

const spreadsheetID = 'YOUR SPREADSHEET ID;
const ss = SpreadsheetApp.openById( spreadsheetID );
const sheet = ss.getSheets()[0];

/************************************************** 
* Database Methods
**************************************************/

const getData = () => { 
  const data = sheet.getDataRange().getValues();
  const fields = data.shift();
  return data.flatMap(row =>  row.map( (col,i) => ({ [fields[i]] : col}) ).reduce((old,current) => ( {...old, ...current} ), {}));
};

const getUserByField = (field,value) => {
 return getData().find(e => e[field] == value);
};

const getUserInfo = () => {
  const userEmail = Session.getActiveUser().getEmail();
  return getUserByField('email', userEmail);
}

/************************************************** 
* TESTS
**************************************************/

const __test__getData = () => {
  console.log( getData());
}

const __test__getUserByField = () => {
  console.log( getUserByField('id', 600));
}

const __test__getUserInfo = () => {
  console.log( getUserInfo() );
}

/***************************************************/
