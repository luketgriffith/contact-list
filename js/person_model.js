import Backbone from 'Backbone';

let personModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/people',

  idAttribute: 'objectId'

});

export default personModel;
