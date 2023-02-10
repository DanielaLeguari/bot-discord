const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js");
const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('Nenhuma linguagem selecionada')
            .addOptions(
                {
                    label: 'JavaScript',
                    description: 'Veja a documentação de JavaScript',
                    value: 'javascript',
                },
                {
                    label: 'discord.js',
                    description: 'Veja a documentação de Discor.js',
                    value: 'discord.js',
                },
                {
                    label: 'Java',
                    description: 'Veja a documentação de Java',
                    value: 'java',
                },
                {
                    label: 'Oracle',
                    description: 'Veja a documentação de Oracle',
                    value: 'oracle',
                },
            ),
    );

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que você quiser"),

    async execute(interaction) {
        await interaction.reply({ content: "Selecione umas das tecnologias abaixo:", components: [row] });
    }
}