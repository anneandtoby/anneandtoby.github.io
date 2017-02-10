$(document).ready(function() {
  var updateHeight = function() {
    var height = $('section').not('.hidden').height();
    $('#sections').height(height);
  };

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
    updateHeight();
  });

  updateHeight();

  var links = $('nav a');
  links.first().addClass('selected');
  links.click(function(e) {
    var link = $(e.target);
    var linkTarget = link.attr('href');

    var sections = $('section');
    sections.addClass('hidden');
    sections.filter(linkTarget).removeClass();

    links.removeClass();
    link.addClass('selected');

    updateHeight();

    e.preventDefault();
    return false;
  });
});