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
  'It&rsquo;s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean.',
  'How&rsquo;s business? Boomin.',
  'They never said winning was easy. Some people can&rsquo;t handle success, I can.',
  'They will try to close the door on you, just open it.',
  'We don&rsquo;t see them, we will never see them.',
  'Every chance I get, I water the plants, Lion!',
  'In life there will be road blocks but we will over come it.',
  'Wraith talk.',
  'Eliptical talk.',
  'To succeed you must believe. When you believe, you will succeed.',
  'Life is what you make it, so let&rsquo;s make it.',
  'To be successful you&rsquo;ve got to work hard, to make history, simple, you&rsquo;ve got to make it.',
  'A major key, never panic. Don&rsquo;t panic, when it gets crazy and rough, don&rsquo;t panic, stay calm.',
  'Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&rsquo;m never giving up, I&rsquo;m just getting started.',
  'You see that bamboo behind me though, you see that bamboo? Ain&rsquo;t nothin&rsquo; like bamboo. Bless up.',
  'In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key.',
  'Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel.',
  'Find peace, life is like a water fall, you&rsquo;ve gotta flow.',
  'Let&rsquo;s see what Chef Dee got that they don&rsquo;t want us to eat.',
  'Lion!',
  'I&rsquo;m up to something.',
  'Surround yourself with angels.',
  'Fan luv.',
  'Mogul talk.',
  'Major key, don&rsquo;t fall for the trap, stay focused. It&rsquo;s the ones closest to you that want to see you fail.',
  'The key to more success is to get a massage once a week, very important, major key, cloth talk.',
  'The key to success is to keep your head above the water, never give up.',
  'It&rsquo;s important to use cocoa butter. It&rsquo;s the key to more success, why not live smooth? Why live rough?',
  'They key is to have every key, the key to open every door.',
  'Learning is cool, but knowing is better, and I know the key to success.',
  'You do know, you do know that they don&rsquo;t want you to have lunch. I&rsquo;m keeping it real with you, so what you going do is have lunch.',
  'Stay focused.',
  'I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing.',
  'You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed.',
  'The key is to enjoy life, because they don&rsquo;t want you to enjoy life. I promise you, they don&rsquo;t want you to jetski, they don&rsquo;t want you to smile.',
  'The other day the grass was brown, now it&rsquo;s green because I ain&rsquo;t give up. Never surrender.',
  'The key is to drink coconut, fresh coconut, trust me.',
  'The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion!',
  'You see the hedges, how I got it shaped up? It&rsquo;s important to shape up your hedges, it&rsquo;s like getting a haircut, stay fresh.',
  'Let me be clear, you have to make it through the jungle to make it to paradise, that&rsquo;s the key, Lion!',
  'Always remember in the jungle there&rsquo;s a lot of they in there, after you overcome they, you will make it to paradise.',
  'I&rsquo;m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth.',
  'Look at the sunset, life is amazing, life is beautiful, life is what you make it.',
  'The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don&rsquo;t want you to eat.'
];
