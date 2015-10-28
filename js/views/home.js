function contacts(data){
  
  data.sort(function(a, b){
    if(a.lastName < b.lastName) return -1;
    if(a.lastName > b.lastName) return 1;
    return 0;
  });
  return data.map(function(item){
    return `
      <li class='names' data-todo-id="${item.objectId}"><i class="fa fa-user"></i> ${item.lastName}, ${item.firstName}</li>`;
        }).join('');

}

function contactsTemplate(data){
  return `
     <ul> ${contacts(data)}</ul>
  `;
}

export default contactsTemplate;
export default contacts;