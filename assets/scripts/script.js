var api = 'https://zenrez-interview.herokuapp.com/classes';
var classes = [];

// get JSON data from provided api
$.getJSON( api, function(data) {
  // set classes in JSON data as classes
  classes = data.classes;
  console.log(classes);
  showAllClasses(classes);
});

function showAllClasses(data) {
  var list = $('.class__list');
  var classCardTemplate = $('#class-card-template').html();
  var template = Handlebars.compile(classCardTemplate);
  list.append(template(data));
}