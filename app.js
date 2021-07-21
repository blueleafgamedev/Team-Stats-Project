const team = {
    _players: [{
      firstName: 'T-Money',
      lastName: 'Engh-A-Ling',
      age: 69
    }],
  
    _games: [{
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    }],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this.players.push(player);
    },
  
    addGame(opponent,teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Knicks', 46, 17);
  team.addGame('Pacers', 33, 42);
  team.addGame('Packers', 10, 101);
  
  console.log(team.players);
  console.log(team.games);