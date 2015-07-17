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
        games.push(game);
      }
  } while (m);
  return games;
};


var result = get_games(text);
var games_js = JSON.stringify(result);
console.log(games_js);