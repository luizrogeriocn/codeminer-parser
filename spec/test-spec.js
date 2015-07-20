var fs = require('fs');
var one_game = fs.readFileSync('./spec/one_game.log', 'utf8');
var two_game = fs.readFileSync('./spec/two_game.log', 'utf8');
var one_game = fs.readFileSync('./spec/one_game.log', 'utf8');

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

    it("should have players", function () {
      var players = games[0].players
      expect(players.length).toBeGreaterThan(0);
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
    players = playerParser.get_players(one_game);
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

describe("Kills Parsing", function () {
  var killParser;
  var kills;
  var means;
  var kill_by_means;

  beforeEach(function() {
    killParser = new KillParser();
    kills = killParser.get_kills(one_game);
    means = killParser.get_means_of_death(one_game);
    kills_by_means = killParser.get_kills_by_means(one_game);
  });

  it("should have kills", function () {
    var count = Object.keys(kills).length
    expect(count).toBeGreaterThan(0);
  });

  it("should have means of deaths", function () {
    var count = Object.keys(means).length
    expect(count).toBeGreaterThan(0);
  });

  it("should have kills by means", function () {
    var count = Object.keys(kills_by_means).length
    expect(count).toBeGreaterThan(0);
  });
});

