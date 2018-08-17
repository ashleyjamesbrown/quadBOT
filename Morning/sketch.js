// javascript file
var bot = new RiveScript();
var startQ = "Hello, bot!";

// Load an individual file.
bot.loadFile("./brain.rive").then(loading_done).catch(loading_error);

// functions and callbacks

function loading_done() {
  console.log("Bot has finished loading!");
  console.log("You > : " + startQ);
  bot.sortReplies();
  // the first reply to the opening q
  bot.reply("local-user", startQ).then(function(reply) {
    console.log("Bot > : " + reply);
  });
}

// It's good to catch errors too!
function loading_error(error, filename, lineno) {
  console.log("Error when loading files: " + error);
}

var button;
var user_input;
var output;

function setup() {
  noCanvas();

  b = select('#submit');
  q = select('#question');
  a = select('#answer');

  //currently broken
  //b.mousePressed(chat);
}

function draw() {
}

function chat(){
  console.log("button pressed")
  var question = q.value();
  console.log(question);
//  a.html(question); //test repeat back

  bot.reply("local-user", question).then(function(reply) {
    console.log("Bot > : " + reply);
    a.html(reply);
  });
}

function keyPressed(){
  if (keyCode==ENTER){
    chat();
  }
}
