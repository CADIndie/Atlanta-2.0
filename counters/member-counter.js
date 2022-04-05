module.exports = async (client) =>{
    const guild = client.guilds.cache.get(this.config.client.serverID);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(this.config.client.memberID);
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
};
