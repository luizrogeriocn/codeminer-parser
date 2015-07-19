var Kill = require('./Kill');
var Player = require('./Player');

var Game = function(game_log) {

  this.kill_parser = new Kill();
  this.player_parser = new Player();

  this.get_games = function(text_param){
    var re = /InitGame(((.|\n)(?!-{60}))*)/g;
    var m;
    var games = [];
    
    do {
        m = re.exec(text_param);
        if (m) {
          var game = {};
          var game_content = m[1];
          game.kills = this.kill_parser.get_kills(game_content);
          game.kills_by_means = this.kill_parser.get_kills_by_means(game_content);
          game.players = this.player_parser.get_players(game_content);
          games.push(game);
        }
    } while (m);
    return games;
  };
};
module.exports = Game;