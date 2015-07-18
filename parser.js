var fs = require('fs');
var text = fs.readFileSync('games.log', 'utf8');


var get_attribute = function(text_param, re_param){
  var m;
  do {
      m = re_param.exec(text_param);
      if (m)
        return m[1];
  } while (m);
};

var get_kills = function(game_param){
  var re = /Kill:(.*)\n/g;
  var killer_re = /Kill:\s(\d+)\s/;
  var killed_re = /\d\s(\d+)\s/;
  var mean_re = /\d\s(\d+):/;
  var s = game_param;
  var m;
  var kills = {};
  kills.total = 0;
  do {
      m = re.exec(s);
      if (m) {
        kills.total++;
        var killer = get_attribute(m[0], killer_re);
        if (kills[killer] != undefined)
          kills[killer] = kills[killer]+1;
        else
          kills[killer] = 1;
      }
  } while (m);
  return kills;
};

var get_kills_by_means = function(game_param){
  var re = /Kill:(.*)\n/g;
  var mean_re = /\d\s(\d+):/;
  var m;
  var kills = {};
  do {
      m = re.exec(game_param);
      if (m) {
        var mean = get_attribute(m[0], mean_re);
        if (kills[mean] != undefined)
          kills[mean] = kills[mean]+1;
        else
          kills[mean] = 1;
      }
  } while (m);
  return kills;
};

var get_players = function(game_param){
  var re = /ClientUserinfoChanged(.*)\n/g;
  var s = game_param;
  var m;
  var players = {};
  
  do {
      m = re.exec(s);
      if (m) {
        var id = get_attribute(m[1], /:\s(\d*).*/g);
        var name = get_attribute(m[1], /n\\(.*)\\t\\\d/g);
        players[id] = name;
      }
  } while (m);
  return players;
};

var get_games = function(text_param){
  var re = /InitGame(((.|\n)(?!-{60}))*)/g;
  var m;
  var games = [];
  
  do {
      m = re.exec(text_param);
      if (m) {
        var game = {};
        var game_content = m[1];
        game.kills = get_kills(game_content);
        game.kills_by_means = get_kills_by_means(game_content);
        game.players = get_players(game_content);
        games.push(game);
      }
  } while (m);
  return games;
};

var result = get_games(text);
var games_js = JSON.stringify(result);
console.log(games_js);