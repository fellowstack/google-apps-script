/************************************************** 
* Spreadsheet DB
**************************************************/

const spreadsheetID = 'YOUR SPREADSHEET ID';
const ss = SpreadsheetApp.openById( spreadsheetID );
const sheet = ss.getSheets()[0];

/************************************************** 
* Database Methods
**************************************************/

const getData = () => { 
  const data = sheet.getDataRange().getValues()
  const fields = data.shift()
  return data.flatMap(row =>  row.map( (col,i) => ({ [fields[i]] : col}) ).reduce((old,current) => ( {...old, ...current} ), {}))
};

const getUserByField = (field,value) => {
 return getData().find(e => e[field] == value)
};

/************************************************** 
* TESTS
**************************************************/

const __test__getData = () => {
  console.log( getData())
}

const __test__getUserByField = () => {
  console.log( getUserByField('id', 600));
}

/****************************************************************************************************/


const createUser = (user) => {
  sheet.appendRow(Object.values( user )) ;
};


const updateUser = (user) => {
  let noError = true;
  const index = getData().findIndex(e => e.id == user.id) ;
  const row = index == -1 ? noError = false : index + 2 ;
  const maxColumns = sheet.getMaxColumns();
  if (noError) sheet.getRange(row,1,1,maxColumns).setValues([Object.values(user)]);
}
