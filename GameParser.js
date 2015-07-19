var Game = require('./Game');
var Kill = require('./KillParser');
var Player = require('./PlayerParser');

var GameParser = function(game_log) {

  this.kill_parser = new Kill();
  this.player_parser = new Player();

  this.parse_games = function(text_param){
    var re = /InitGame(((.|\n)(?!-{60}))*)/g;
    var m;
    var games = [];
    
    do {
        m = re.exec(text_param);
        if (m) {
          
          
          // game.kills_by_means = this.kill_parser.get_kills_by_means(game_content);
          games.push(game);
        }
    } while (m);
    return games;
  };
};
module.exports = GameParser;