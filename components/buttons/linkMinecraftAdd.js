const linkDiscordWithMinecraft = require('./../../models/linkDM.js');
const {  EmbedBuilder } = require('discord.js');
const { colorEmbed } = require('./../../json/seting.json')

module.exports = {
    data: { 
        name: 'aadLinkMinecraft'
    },
    async execute(interaction) {
        const embed = interaction.message.embeds[0]
        const player = await interaction.guild.members.fetch(embed.data.fields[0].value);
        
        interaction.message.delete();
        const Embed = new  EmbedBuilder()
            .setColor(colorEmbed)
            .setTitle(':white_check_mark:  | Заявка на привязку акаунтов')
            .setDescription(embed.data.description)
            .addFields(
                { name: 'ID', value: embed.data.fields[0].value},
                { name: 'Никнейм', value: embed.data.fields[1].value},
                { name: 'Возраст', value: embed.data.fields[2].value},
                { name: 'Наличие микрофона', value: embed.data.fields[3].value},
        )

        const EmbedDM = new EmbedBuilder()
            .setColor(colorEmbed)
            .setTitle('**RodoCraft**')
            .setDescription('Ваша заявка на привязку акаунтов была принята.')

        linkDiscordWithMinecraft.create({
            discordName: player.user.username,
            discordId: embed.data.fields[0].value,
            minecraftName: embed.data.fields[1].value,
            age: embed.data.fields[2].value,
            howKnow: embed.data.fields[4].value,
            hasMicrophone: embed.data.fields[3].value,
            whitelist: null,
            prefixesname: null,
            notification: false,
        })
        await interaction.channel.send({ embeds: [Embed] });
        return await player.send({ embeds: [EmbedDM] });
    }
}