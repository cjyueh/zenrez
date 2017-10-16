var api = 'https://zenrez-interview.herokuapp.com/classes';
var classes = [];
var selectClass;

// get JSON data from provided api
$.getJSON(api, function(data) {
  // set classes in JSON data as classes
  classes = data.classes;
  showAllClasses(classes);
});

// show general info for all the classes
function showAllClasses(data) {
  var list = $('.class__list');
  var classCardTemplate = $('#class-card-template').html();
  var template = Handlebars.compile(classCardTemplate);
  list.append(template(data));
  // on click, get class is and add as hash, display single class view
  list.find($('.class__card')).on('click', function(e) {
    e.preventDefault();
    var classIndex = $(this).data('index');
    window.location.hash = classIndex;

    selectClass = $(data[classIndex - 1]);
    showClassPage(selectClass[0]);
  });
}

// show single class info
function showClassPage(data) {
  var classPage = $('.class-page');
  var classPageContent = $('#class-page-template').html();
  var template = Handlebars.compile(classPageContent);
  classPage.append(template(data));
  classPage.addClass('show-page');

  // close class page
  classPage.find($('.class-page__close')).on('click', function(e) {
    classPage.removeClass('show-page');
  });
}