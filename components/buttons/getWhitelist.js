module.exports = {
    data: { 
        name: 'getWhitelist'
    },
    async execute(interaction) {
        return await interaction.reply({content: 'Эта функция еще недоступна.', ephemeral: true});
    }
}