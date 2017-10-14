var api = 'https://zenrez-interview.herokuapp.com/classes';
var classes = [];

// get JSON data from provided api
$.getJSON( api, function(data) {
  // set classes in JSON data as classes
  classes = data.classes;
  console.log(classes);
  $('.class-list').append('<p>' + classes[0].id +'</p>');
});
