var Game = function (players_info, means_of_death) {
  this.total_kills = 0;
  this.players = [];
  this.kills = {};
  this.kills_by_means = {};

  this.means_of_death = means_of_death;
  this.players_info = players_info;

  
};
module.exports = Game;