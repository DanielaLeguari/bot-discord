const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist de Estudos!"),

    async execute(interaction) {
        await interaction.reply("https://deezer.page.link/9bQJwHvRE6cMBzcUA")
    }
}