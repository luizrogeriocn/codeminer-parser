var fs = require('fs');
var GameParser = require('./GameParser');
var text = fs.readFileSync('games.log', 'utf8');

var gameParser = new GameParser();
games = gameParser.parse_games(text);

for (var i = 0; i <= games.length - 1; i++) {
  console.log('********** GAME '+(i+1)+' **********')
  console.log(games[i]);
};