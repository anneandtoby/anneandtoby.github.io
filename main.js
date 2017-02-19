$(document).ready(function() {
  var codeInput = $('#rsvp-code input');
  codeInput.keydown(function(e) {
    if (e.key != 'Enter') {
      return;
    }

    var code = codeInput.val().toLowerCase();
    if (code != 'galileo') {
      $("#rsvp-error").show();
      return;
    }

    $('#rsvp-code').hide();
    $('#rsvp-form').show();
  });

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

    if (linkTarget == '#where' && $('#map').is(':empty')) {
      initMap();
    }

    e.preventDefault();
    return false;
  });
});