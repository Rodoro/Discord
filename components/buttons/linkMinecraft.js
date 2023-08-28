const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle} = require("discord.js")

module.exports = {
    data: { 
        name: 'linkMinecraft'
    },
    async execute(interaction) {
        const modal = new ModalBuilder(interaction)
            .setCustomId('linkMinecraft')
            .setTitle('Привязка к minecraft')
        const textInput1 = new TextInputBuilder()
            .setCustomId('minecraftName')
            .setLabel('Никнейм в игре')
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
        const textInput2 = new TextInputBuilder()
            .setCustomId('age')
            .setLabel('Возраст')
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
        const textInput3 = new TextInputBuilder()
            .setCustomId('microfon')
            .setLabel('Наличие микрофона')
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
        const textInput4 = new TextInputBuilder()
            .setCustomId('howKnow')
            .setLabel('От куда вы узнали о нас')
            .setRequired(true)
            .setStyle(TextInputStyle.Paragraph)

        const component1 = new ActionRowBuilder().addComponents(textInput1);
        const component2 = new ActionRowBuilder().addComponents(textInput2);
        const component3 = new ActionRowBuilder().addComponents(textInput3);
        const component4 = new ActionRowBuilder().addComponents(textInput4);

        modal.addComponents(component1).addComponents(component2).addComponents(component3).addComponents(component4)

        await interaction.showModal(modal);
    }
}