//get games:        InitGame(((.|\n)(?!-{60}))*)
//get kills:        Kill:(.*)\n
//get killer:       \d:\s(.*)\skilled
//get killed:       killed\s(.*)\sby
//get meanOfDeath:  by\s(.*)\n
//get clientInfo:   ClientUserinfoChanged(.*)\n
//get clientIds:    ClientConnect:\s(\d*)\n
//get clientName:   n\\(.*)\\t\\0

var fs = require('fs');
var text = fs.readFileSync('games.log', 'utf8');

var get_kills = function(game_param){
  var re = /Kill:(.*)\n/g;
  var s = game_param;
  var m;
  var kills = 0;
  
  do {
      m = re.exec(s);
      if (m) {
        kills++
      }
  } while (m);
  console.log(kills);
  return kills;
};

var get_games = function(text_param){
  var re = /InitGame(((.|\n)(?!-{60}))*)/g;
  var s = text_param;
  var m;
  var games = [];
  
  do {
      m = re.exec(s);
      if (m) {
        var game = {};
        game.content = m[1];
        game.total_kills = get_kills(game.content);
        games.push(game);
      }
  } while (m);
  return games;
};

var result = get_games(text);
var games_js = JSON.stringify(result);
console.log(games_js);