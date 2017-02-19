$(document).ready(function() {
  var links = $('nav a');
  links.first().addClass('selected');
  links.click(function(e) {
    var link = $(e.target);
    var linkTarget = link.attr('href');

    var sections = $('section');
    sections.hide();
    sections.filter(linkTarget).show();

    links.removeClass();
    link.addClass('selected');

    e.preventDefault();
    return false;
  });
});