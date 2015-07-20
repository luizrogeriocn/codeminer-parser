var Game = function (players_info, means_of_death) {
  this.total_kills = 0;
  this.players = [];
  this.kills = {};
  this.kills_by_means = {};
  this.ranking = [];

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

  this.set_kills_by_means = function(param){
    for (var key in param) {
      if (param.hasOwnProperty(key)) {
        var name = this.means_of_death[key];
        this.kills_by_means[name] = param[key];
      }
    };
  };

  this.sort_kills = function(){
    for (var key in this.kills) {
      if (this.kills.hasOwnProperty(key)) {
        var kill = {};
        kill.name = key;
        kill.count = this.kills[key];
        this.ranking.push(kill);
      }
    };
    this.ranking.sort(function(a,b) {return (a.count > b.count) ? -1 : ((b.count > a.count) ? 1 : 0);} );
  };

};
module.exports = Game;