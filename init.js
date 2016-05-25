/**
 * Created by Mosh Mage on 5/25/2016.
 */
var yanbi = require('yanbi')({
    debug: false,               // same as node-irc
    server: 'irc.snoonet.org',  // same as node-irc
    channelsArray: ['#mmDev'],  // same as node-irc
    selfNickname: 'suecada',    // the bots nickname
    nickserv: false,            // if this is filed, uppon register event the bot auto-identify with the given string
    owner: 'r3dsmile',          // nickname of the owner
    yanbiModules: './modules/'  // where the modules are stored - only files
});
