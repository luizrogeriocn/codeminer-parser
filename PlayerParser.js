var Helper = require('./Helper');

var Player = function(game_log){

  this.helper = new Helper();

  this.get_players = function(game_param){
    var re = /ClientUserinfoChanged(.*)\n/g;
    var m;
    var players = {};
    
    do {
        m = re.exec(game_param);
        if (m) {
          var id = this.helper.get_attribute(m[1], /:\s(\d*).*/g);
          var name = this.helper.get_attribute(m[1], /n\\(.*)\\t\\\d/g);
          players[id] = name;
        }
    } while (m);
    return players;
  };
};
module.exports = Player;