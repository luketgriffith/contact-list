import backbone from 'backbone';

let editTemplate =function(firstName, lastName, phone, email){
  return `<div>
  <input type = 'text' value=firstName id='addFirstName'>
  <input type = 'text' value=lastName id='addLastName'> 
  <input type = 'number' value=phone id= 'addPhone'>
  <input type = 'email' value = email id= 'addEmail'>
  // <input type = 'text' value = 'image' id = 'addPic'>
  <button id="save">Save</button>
  </div>`;
}
export default editTemplate;