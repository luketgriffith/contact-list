import underscore from 'underscore';


function processData(data){

  return `<div class='contact'>
          <h2>${data.firstName} ${data.lastName}</h2>
          <img src='${data.image}'>
          <h3>Phone: ${data.phone}</h3>
          <h3>Email: ${data.email}</h3>
          </div>
  `;
}


function personTemplate(data){
  return `
    
    <div> ${processData(data)}</div>
  `;
}

export default personTemplate;       