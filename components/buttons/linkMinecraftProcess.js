const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle} = require("discord.js")

module.exports = {
    data: { 
        name: 'processLinkMinecraft'
    },
    async execute(interaction) {
        const modal = new ModalBuilder(interaction)
            .setCustomId('linkMinecraftProcess')
            .setTitle('Причина откланения')
        const textInput = new TextInputBuilder()
            .setCustomId('process')
            .setLabel('Причина')
            .setRequired(true)
            .setStyle(TextInputStyle.Short)

        const component = new ActionRowBuilder().addComponents(textInput);

        modal.addComponents(component)

        await interaction.showModal(modal);
    }
}