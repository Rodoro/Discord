const {  EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { colorEmbed } = require('./../../json/seting.json')

module.exports = {
    data : new SlashCommandBuilder()
        .setName('ui-verification')
        .setDescription('Интерфейс для верификации')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {


        const Embed = new EmbedBuilder()
            .setColor(colorEmbed)
            .setTitle('✅ | Верификация')
            .addFields({
                name: 'Привязать minecraft',
                value: 'Для того, чтобы привезать свой discord акаунт к mincraft, нажмите зеленую кнопку.',
                inline: true
            },  {
                name: 'Получить whitelist',
                value: 'Для того, чтобы получить доступ доступ к ванильному minecraft серверу, нажмите кнопку "Получить whitelist".',
                inline: true
            })

        const button1 = new ButtonBuilder()
            .setCustomId('linkMinecraft')
            .setLabel('Привезать minecraft')
            .setStyle(ButtonStyle.Success);
        const button2 = new ButtonBuilder()
            .setCustomId('getWhitelist')
            .setLabel('Получить whitelist')
            .setStyle(ButtonStyle.Primary);
            
        await interaction.reply({embeds: [Embed], components: [new ActionRowBuilder().addComponents(button1).addComponents(button2)]});
    }
}