// generates paragraphs
generate = function() {
  var output = '';
  var quantity = parseInt($('#quantity').val());

  for(var i = 0; i < quantity; i++) {
    var paragraph = '<p>'
    while (paragraph.length <= maxParagraphLength()) {
      var index = Math.floor(Math.random() * majorKeys.length);
      paragraph += (' ' + majorKeys[index]);
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
var majorKeys = [
  'Bless up.',
  'They don&rsquo;t want us to win.',
  'Another one.',
  'We the best.',
  'Cloth talk.',
  'They don&rsquo;t want us to eat.',
  'Special cloth alert.',
  'Egg whites, chicken sausage, wheat toast, water.',
  'Celebrate success right, the only way, Apple.',
  'You smart, you loyal, you a genius.',
  'Hammock talk come soon.',
  'Give thanks to the most high.',
  'Congratulations, you played yourself.',
  'Don&rsquo;t ever play yourself.',
  'The key to more success is to have a lot of pillows.',
  'The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.',
  'Watch your back, but more importantly when you get out the shower, dry your back, it&rsquo;s a cold world out there',
  'It&rsquo;s on you how you want to live our life. Everyone has a choice. I pick my choice, squeaky clean.',
  'How&rsquo;s business? Boomin.',
  'They never said winning was easy. Some people can&rsquo;t handle success, I can.',
  'They will try to close the door on you, just open it.',
  'We don&rsquo;t see them, we will never see them.',
  'Every chance I get, I water the plants, Lion!',
  'In life there will be road blocks but we will over come it.',
  'Wraith talk.',
  'Eliptical talk.',
  'You see that bamboo behind me though, you see that bamboo? Ain&rsquo;t nothin&rsquo; like bamboo.',
  'Lion!'
];
