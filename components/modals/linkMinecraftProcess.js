const { colorEmbed } = require('./../../json/seting.json')
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: { 
        name: 'linkMinecraftProcess'
    },
    async execute(interaction) {
        const embed = interaction.message.embeds[0]
        const player = await interaction.guild.members.fetch(embed.data.fields[0].value);

        interaction.message.delete();

        const Embed = new EmbedBuilder()
            .setColor(colorEmbed)
            .setTitle(':no_entry: | Заявка на привязку акаунтов')
            .setDescription(`Заявка от ${player.user.username}`)
            .addFields(
                { name: 'ID-Модератора', value: interaction.user.id},
                { name: 'Модератор', value: interaction.user.username},
                { name: 'Причина отказа', value: interaction.fields.getTextInputValue('process')},
                { name: 'ID', value: embed.data.fields[0].value},
                { name: 'Никнейм', value: embed.data.fields[1].value},
                { name: 'Возраст', value: embed.data.fields[2].value},
                { name: 'Наличие микрофона', value: embed.data.fields[3].value},
                { name: 'Узнал от', value: embed.data.fields[4].value},
        )

        const EmbedDM = new EmbedBuilder()
            .setColor(colorEmbed)
            .setTitle('**RodoCraft**')
            .setDescription('Ваша заявка на привязку акаунтов была откланена. Причина: ' +  interaction.fields.getTextInputValue('process'))


        await interaction.channel.send({ embeds: [Embed] });
        return await player.send({ embeds: [EmbedDM] });
    }
}