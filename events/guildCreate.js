exports.run = (client, guildCreate) => {
  guildCreate.createChannel("moderation", "text");
};