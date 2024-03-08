const SteamUsr = require('steam-user');
const cfgs = require('./config.json');

const accounts = [];

for (const cfg of cfgs) {
  const acc = new SteamUsr();

  acc.logOn(cfg);

  acc.on('loggedOn', () => {
    console.log("Successfully logged in to: " + cfg.accountName);
    if (cfg.visible === true) {
      acc.setPersona(SteamUsr.EPersonaState.Online);
    } else {
      acc.setPersona(SteamUsr.EPersonaState.Invisible);
    }
    acc.gamesPlayed(cfg.games);
    console.log("Farming hours on: " + cfg.games);
  });

  acc.on('LoggedInElsewhere', () => {
    console.log("Someone logged into account");
    console.log("Trying to relogin");
    acc.logOn(cfg);
  });

  accounts.push(acc);
}