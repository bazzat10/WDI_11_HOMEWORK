var express = require('express');
var request = require('request');
var path = require('path');// help me build paths dir s / par of the EJS package
var engine = require('ejs-mate');
var app = express();
var _ = require('underscore');

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

compliments2 = [
  "Your smile is contagious.",
  "You look great today.",
  "You're a smart cookie.",
  "I bet you make babies smile.",
  "You have impeccable manners.",
  "I like your style.",
  "You have the best laugh.",
  "I appreciate you.",
  "You are the most perfect you there is.",
  "You are enough."
];


colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];


// where are the temmplates?
app.set('views', path.join(__dirname,'views'));

// what kind of templates?
app.engine('ejs', engine); // alternate to handlebars
app.set('view engine', 'ejs');

app.use( express.static(path.join(__dirname, 'public') ) )



function home (req, res){
  var randomColor = _.sample(colors);
  var compliment = _.sample(compliments);

  res.render('home', {
    compliment: compliment,
    color: randomColor
  });

};

function name (req, res){
  var name = req.params.name
  var randomColor = _.sample(colors);
  var compliment = _.sample(compliments2);
  res.render('name', {
    name: name,
    compliment: compliment,
    color: randomColor
  });
};

app.get('/', home);
app.get('/:name', name);




module.exports = app;
