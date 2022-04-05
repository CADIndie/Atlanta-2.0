module.exports = async (client) =>{
    const guild = client.guilds.cache.get(this.client.config.serverID);
    setInterval(() =>{
        const roleCount = guild.roleCount;
        const channel = guild.channels.cache.get(this.client.config.rolesID);
        channel.setName(`Total Roles: ${roleCount.toLocaleString()}`);
        console.log('Updating Role Count');
    }, 5000);
};
