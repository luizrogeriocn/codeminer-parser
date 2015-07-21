var Helper = require('./Helper');

var Kill = function(game_log){

  this.helper = new Helper();

  this.get_kills = function(game_param){
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
          var killer = this.helper.get_attribute(m[0], killer_re);
          var killed = this.helper.get_attribute(m[0], killed_re);
          if (kills[killer] != undefined)
            kills[killer] = kills[killer]+1;
          else
            kills[killer] = 1;

          if(killer == '1022'){
            if(kills[killed] != undefined )
              kills[killed] = kills[killed] -1;
            else
              kills[killed] = -1;
          }
        }
    } while (m);
    return kills;
  };

  this.get_kills_by_means = function(game_param){
    var re = /Kill:(.*)\n/g;
    var mean_re = /\d\s(\d+):/;
    var m;
    var kills = {};
    do {
        m = re.exec(game_param);
        if (m) {
          var mean = this.helper.get_attribute(m[0], mean_re);
          if (kills[mean] != undefined)
            kills[mean] = kills[mean]+1;
          else
            kills[mean] = 1;
        }
    } while (m);
    return kills;
  };

  this.get_means_of_death = function(text_param){
    var re = /Kill:(.*)\n/g;
    var mean_id_re = /\d\s(\d+):/;
    var mean_name_re = /by\s(.*)\n/;
    var m;
    var means = {};
    do {
        m = re.exec(text_param);
        if (m) {
          var mean_name = this.helper.get_attribute(m[0], mean_name_re);
          var mean_id = this.helper.get_attribute(m[0], mean_id_re);
          means[mean_id] = mean_name;
        }
    } while (m);
    return means;
  };
};
module.exports = Kill;