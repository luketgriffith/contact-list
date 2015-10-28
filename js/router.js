import Backbone from 'backbone';
import personCollection from './person_collection';
import contactsTemplate from './views/home';
import contacts from './views/home';
import personTemplate from './views/person';
import $ from 'jquery';
import addTemplate from './views/add_person';
import personModel from './person_model'
let Router = Backbone.Router.extend({
  routes: {
    "": "home",  
    "person1": "person1page",
    "add": "addPerson"
    },


  initialize: function(appElement){
    
    this.$el = appElement;
    this.people = new personCollection();
    let router= this;
    
    this.$el.on('click', '.names', function(event){
      
        let $li= $(event.currentTarget);
        var nameId = $li.data('todo-id');
        router.navigate(`people/${nameId}`);
        router.person1page(nameId);

    });
        $('h1').on('click', function(){
        router.navigate(`/`);
        router.home();
    });
        $('#add').on('click', function(){
          $('#add').remove();
          router.navigate(`/add`);
          router.addPerson();
        })
  },

  home: function  () {
    
     this.people.fetch().then(function(){
      this.$el.html(contactsTemplate(this.people.toJSON()) );
      }.bind(this));
     
  },

    showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },
  person1page: function(nameId){
    let dude = this.people.get(nameId);
     if (dude) {
      this.$el.html( personTemplate(dude.toJSON()) );
    } else {
      let router = this;
      dude = this.people.add({objectId: nameId});
      this.showSpinner();
      dude.fetch().then(function() {
        router.$el.html( personTemplate(dude.toJSON()) );
      });
    }    
    
  },
  addPerson: function(){
    $('.addPersonBox').append(addTemplate);
    $('#save').on('click', ()=>{
    var first = $('#addFirstName').val();
    var last = $('#addLastName').val();
    var newPhone = Number($('#addPhone').val());
    var newEmail = $('#addEmail').val();
    var newImage = $('#addPic').val();
    
    let newDude = new personModel({
      firstName: first,
      lastName: last,
      email: newEmail,
      image: newImage,
      phone: newPhone
      });

    console.log(newDude);
    newDude.save();
    $('.addPersonBox').remove();
    let router = this;
    router.navigate(`/`);
    location.reload(true);
    })
  },
  start: function(){
    Backbone.history.start();   //Backbone.history watches the URL chain to see if it changes. start starts it
  }

});

export default Router;