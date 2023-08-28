const {  EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { systemchenelId, colorEmbed } = require('./../../json/seting.json')

module.exports = {
    data: { 
        name: 'linkMinecraft'
    },
    async execute(interaction) {
        const Embed = new EmbedBuilder()
        .setColor(colorEmbed)
        .setTitle('🌍 | Заявка на привязку акаунтов')
        .setDescription(`Заявка от ${interaction.user.username}`)
        .addFields(
            { name: 'ID', value: interaction.user.id},
            { name: 'Никнейм', value: interaction.fields.getTextInputValue('minecraftName')},
            { name: 'Возраст', value: interaction.fields.getTextInputValue('age')},
            { name: 'Наличие микрофона', value: interaction.fields.getTextInputValue('microfon')},
            { name: 'Узнал от', value: interaction.fields.getTextInputValue('howKnow')},
        )

        const Button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('aadLinkMinecraft')
                .setLabel('Принять')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('processLinkMinecraft')
                .setLabel('Отказать')
                .setStyle(ButtonStyle.Danger)
        )

        const channel = interaction.client.channels.cache.get(systemchenelId);
            await channel.send({ embeds: [Embed], components: [Button]})
            return interaction.reply({content: 'Ваша заявка была отправлена', ephemeral: true});
    }
}