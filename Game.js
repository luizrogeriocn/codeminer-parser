var Game = function (players_info, means_of_death) {
  this.total_kills = 0;
  this.players = [];
  this.kills = {};
  this.kills_by_means = {};

  this.means_of_death = means_of_death;
  this.players_info = players_info;

  this.set_total_kills = function(param){
    this.total_kills = param['total'];
  };

  this.set_players = function(){
    for (var key in this.players_info) {
      if (this.players_info.hasOwnProperty(key)) {
        this.players.push(this.players_info[key]);
      }
    };
  };

  this.set_kills = function(param){
    delete param['total'];
    delete param['1022'];

    for (var key in param) {
      if (param.hasOwnProperty(key)) {
        var name = this.players_info[key];
        this.kills[name] = param[key];
      }
    };
  };

  // this.set_kills_by_means = function(kills_param, means_of_death_param){};
};
module.exports = Game;