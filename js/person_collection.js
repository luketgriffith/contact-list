import Backbone from 'backbone';
import personModel from './person_model';
let personCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/people',
  model: personModel,
  parse: function(data){
    return data.results;
    
  }
})
export default personCollection;