##A Parser for the Quake 3 Arena game logs.
This application aims to get information from the log generated by Quake 3 Arena and parse it to a easy to understand JSON format.

##Usage
###Install dependencies
'npm install' to install al the dependencies.

###Parse the game.log
'npm start' to parse the game.log into a pretty JSON. :)

###Tests
'npm test' to run the test suite


##About the files

###Game
- This is the model for game objects. Its constructor receives two parameters: A hash with player's (id -> names), and a hash with means of death (id -> name). Based on those hashes it is possible to set players, kills and kills_by_means just having their ids. Also there is a sort_kills method to build the ranking property.

###GameParser
- This is the main parser object and it is used to parse the whole games.log file. GameParser doesn't know how to parse specific information like a player's name or anything related to deaths. It's purpose is to break games.log down to several one-game pieces.

####PlayerParser
- The purpose of this parser is to retrieve data about players from a game. It will look for the ClientUserInfo message in order to get the player's ID and Nickname.

####KillParser
- The purpose of this parser is to retrieve data about kills from a game. It has methods to get every kill from the game and group them by means of death. It also looks up for all the means of death for that specific game, storing them by ID.

#####Helper
- Helper was made to reduce code duplication. Several getter methods were abstracted into this one. Given a text input and a regex, it will execute the regex and return the first capture group.
