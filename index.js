const SteamUsr = require('steam-user');
const acc1 = new SteamUsr();
const cfg = require('./config.json');
acc1.logOn(cfg);
acc1.on('loggedOn',()=>{
    console.log("Succesfully logged to: " + cfg.accountName);
    if(cfg.visible == true)
    {
        acc1.setPersona(SteamUsr.EPersonaState.Online);
    } 
    if(cfg.visible == false) {
        acc1.setPersona(SteamUsr.EPersonaState.invisibe);
    }
    acc1.gamesPlayed(cfg.acc1games);
    console.log("Farming hours on:" + cfg.acc1games);
})