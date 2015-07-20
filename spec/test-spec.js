var fs = require('fs');
var one_game = fs.readFileSync('./spec/one_game.log', 'utf8');
var two_game = fs.readFileSync('./spec/two_game.log', 'utf8');
// var no_game = fs.readFileSync('./spec/no_game.log', 'utf8');
var GameParser = require('../GameParser');


describe("One game Parsing", function () {
  var gameParser;
  var games;

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
  var gameParser;
  var games;

  beforeEach(function() {
    gameParser = new GameParser();
    games = gameParser.parse_games(two_game);
  });

  it("should have more than one game", function () {
    expect(games.length).toBeGreaterThan(1);
  });
});

