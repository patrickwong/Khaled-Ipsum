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
  'Egg whites, turkey sausage, wheat toast, water. Of course they don&rsquo;t want us to eat our breakfast, so we are going to enjoy our breakfast.',
  'Celebrate success right, the only way, apple.',
  'You smart, you loyal, you a genius.',
  'Hammock talk come soon.',
  'Give thanks to the most high.',
  'Congratulations, you played yourself.',
  'Don&rsquo;t ever play yourself.',
  'The key to more success is to have a lot of pillows.',
  'The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.',
  'Watch your back, but more importantly when you get out the shower, dry your back, it&rsquo;s a cold world out there.',
  'It&rsquo;s on you how you want to live our life. Everyone has a choice. I pick my choice, squeaky clean.',
  'How&rsquo;s business? Boomin.',
  'They never said winning was easy. Some people can&rsquo;t handle success, I can.',
  'They will try to close the door on you, just open it.',
  'We don&rsquo;t see them, we will never see them.',
  'Every chance I get, I water the plants, Lion!',
  'In life there will be road blocks but we will over come it.',
  'Wraith talk.',
  'Eliptical talk.',
  'To succeed you must believe. Life is what you make it, so let&rsquo;s make it.',
  'To be successful you&rsquo;ve got to work hard, to make history, simple, you&rsquo;ve got to make it.',
  'A major key, never panic. Don&rsquo;t panic, when it gets crazy and rough, don&rsquo;t panic, stay calm.',
  'Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&rsquo;m never giving up, I&rsquo;m just getting started.',
  'You see that bamboo behind me though, you see that bamboo? Ain&rsquo;t nothin&rsquo; like bamboo.',
  'In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key.',
  'Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel.',
  'Find peace, life is like a water fall, you&rsquo;ve gotta flow.',
  'Let&rsquo;s see what Chef Dee got that they don&rsquo;t want us to eat.',
  'Lion!'
];
