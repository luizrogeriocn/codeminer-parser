var fs = require('fs');
var Game = require('./Game');
var text = fs.readFileSync('games.log', 'utf8');


var game = new Game();
games = game.get_games(text);
console.log(JSON.stringify(games));
// var result = get_games(text);
// var games_js = JSON.stringify(result);
// console.log(games_js);
// console.log('*************');
// console.log(JSON.stringify(get_means_of_death(text)));