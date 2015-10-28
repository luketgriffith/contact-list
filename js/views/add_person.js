import backbone from 'backbone';

let addTemplate =`<div>
  <input type = 'text' placeholder='First Name' id='addFirstName'>
  <input type = 'text' placeholder='Last Name' id='addLastName'> 
  <input type = 'number' placeholder='Phone' id= 'addPhone'>
  <input type = 'email' placeholder='Email' id= 'addEmail'>
  <input type = 'text' placeholder = 'Image URL' id = 'addPic'>
  <button id="save">Save</button>
  </div>`;

export default addTemplate;