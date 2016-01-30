// generates paragraphs
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

// generates randomized paragraph max length
maxParagraphLength = function() {
  var baseLength = 400;
  var threshold = 0.5;
  var randomizedLength = parseInt(Math.random() * threshold * baseLength) + baseLength;
  return randomizedLength;
}

// page load
document.addEventListener('DOMContentLoaded', function() {
  generate();
  prependText();
}, false)

// on select change
function changeEventHandler(event) {
  generate();
}

// prepend text to first paragraph
function prependText() {
  var firstParagraph = document.querySelector("p:first-child");
  firstParagraph.innerHTML = "Lorem Khaled Ipsum is a major key to success." + firstParagraph.innerHTML;
}

// major keys
var phrases = [
  'Bless up.',
  'They don&rsquo;t want us to win.',
  'Key to more success is clean heart and clean face.',
  'Lion!'
];
