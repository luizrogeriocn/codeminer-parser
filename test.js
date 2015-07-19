var fs = require('fs');
var GameParser = require('./GameParser');
var text = fs.readFileSync('games.log', 'utf8');

var gameParser = new GameParser();
games = gameParser.parse_games(text);
console.log(games);