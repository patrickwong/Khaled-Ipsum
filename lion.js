// generates the paragraphs

generate = function() {
  var output = '';
  var quantity = parseInt($('#quantity').val());

  for(var i = 0; i < quantity; i++) {
    var paragraph = '<p>'
    while (paragraph.length <= maxParagraphLength()) {
      var index = Math.floor(Math.random() * phrases.length);
      paragraph += (' ' + phrases[index]);
    };

    paragraph += '</p>';
    output += paragraph;
  }

  $('#output').html(output);
}


// generates a randomized paragraph max length

maxParagraphLength = function() {
  // customize these to add more or less variance to paragraph length
  var baseLength = 400;
  var threshold = 0.5;

  var randomizedLength = parseInt(Math.random() * threshold * baseLength) + baseLength;
  return randomizedLength;
}

// On page load
document.addEventListener('DOMContentLoaded', function() {
  generate();
}, false)

// on change
function changeEventHandler(event) {
  generate();
}

// add phrases here

var phrases = [
  'Bless up.',
  'They don&rsquo;t want us to win',
  'Key to more success is clean heart and clean face.',
  'Lion!'
];
