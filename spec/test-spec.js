var fs = require('fs');
var one_game = fs.readFileSync('./spec/one_game.log', 'utf8');
var two_game = fs.readFileSync('./spec/two_game.log', 'utf8');
var game_player_kill = fs.readFileSync('./spec/game_player_kill.log', 'utf8');

var GameParser = require('../GameParser');
var PlayerParser = require('../PlayerParser');
var KillParser = require('../KillParser');


describe("Game Parsing", function () {
  var gameParser;
  var games;

  describe("Parsing only one game", function () {

    beforeEach(function() {
      gameParser = new GameParser();
      games = gameParser.parse_games(one_game);
    });

    it("should have only one game", function () {
      expect(games.length).toBe(1);
    });

    it("should have only one player", function () {
      var players = games[0].players
      expect(players.length).toBe(1);
    });

    it("should have a player called Isgalamido", function () {
      var players = games[0].players;
      expect(players.indexOf('Isgalamido')).not.toBe(-1);
    });
  });

  describe("Parsing more than one game", function () {

    beforeEach(function() {
      gameParser = new GameParser();
      games = gameParser.parse_games(two_game);
    });

    it("should have more than one game", function () {
      expect(games.length).toBeGreaterThan(1);
    });
  });
});

describe("Player Parsing", function () {
  var playerParser;
  var players;

  beforeEach(function() {
    playerParser = new PlayerParser();
    players = playerParser.get_players(game_player_kill);
  });

  it("should have 6 players", function () {
    var count = Object.keys(players).length
    expect(count).toBe(6);
  });

  it("should have a player of id '2' named 'Oootsimo' ", function () {
    var id = 2;
    expect(players[id]).toBe('Oootsimo');
  });
});

describe("Player Parsing", function () {
  var killParser;
  var kills;

  beforeEach(function() {
    killParser = new KillParser();
    kills = killParser.get_kills(game_player_kill);
  });
});

