import underscore from 'underscore';


function processData(data){

  return `<div class='contact'>
          <h2 id='firstName'>${data.firstName}</h2>
          <h2 id='lastName'> ${data.lastName}</h2>
          <img src='${data.image}' id='image'>
          <h3 id ='phone'>Phone: ${data.phone}</h3>
          <h3 id= 'email'>Email: ${data.email}</h3>
          <button id="edit">Edit</button>
          </div> 
  `;
}


function personTemplate(data){
  return `
    
    <div> ${processData(data)}</div>
  `;
}

export default personTemplate;       