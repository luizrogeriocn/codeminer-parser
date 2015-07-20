var Game = require('./Game');
var Kill = require('./KillParser');
var Player = require('./PlayerParser');

var GameParser = function(game_log) {

  this.kill_parser = new Kill();
  this.player_parser = new Player();
  this.games = [];

  this.parse_games = function(text_param){
    var re = /InitGame(((.|\n)(?!-{60}))*)/g;
    var m;
    
    do {
        m = re.exec(text_param);
        if (m) {
          var game_content = m[1];
          var players_info = this.player_parser.get_players(game_content);
          var means_of_death = this.kill_parser.get_means_of_death(game_content);
          var kills = this.kill_parser.get_kills(game_content);
          var kills_by_means = this.kill_parser.get_kills_by_means(game_content);
          
          var game = new Game(players_info, means_of_death);
          game.set_total_kills(kills);
          game.set_players();
          game.set_kills(kills);
          game.set_kills_by_means(kills_by_means);
          game.sort_kills();

          this.games.push(game);
        }
    } while (m);
    return this.games;
  };
};
module.exports = GameParser;