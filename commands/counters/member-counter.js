module.exports = async (client) =>{
    const guild = client.guilds.cache.get('956951770205143041');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('958391872131330088');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
};
