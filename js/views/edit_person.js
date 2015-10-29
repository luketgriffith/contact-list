import backbone from 'backbone';

let editTemplate =function(){
  return `<div>
  <input type = 'text'  id='addFirstName'>
  <input type = 'text'  id='addLastName'> 
  <input type = 'number'  id= 'addPhone'>
  <input type = 'email'  id= 'addEmail'>
  <button id="save">Save</button>
  </div>`;
}
export default editTemplate;