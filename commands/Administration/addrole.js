const Command = require("../../classes/BaseCommand.js");

class AddRole extends Command {

    constructor (client) {
        super(client, {
            name : "addrole",
            dirname : __dirname,
            enabled : true,
            guildOnly : true,
            aliases : [],
            memberPermissions : [ "SEND_MESSAGES" ],
            botPermissions : [ "SEND_MESSAGES", "EMBED_LINKS", "MANAGE_ROLES" ],
            nsfw : false,
            ownerOnly : false,
            cooldown : 100000
        });
    }

    async run (message, args) {
        
    }
}