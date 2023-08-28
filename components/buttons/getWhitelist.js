module.exports = {
    data: { 
        name: 'getWhitelist'
    },
    async execute(interaction) {
        await interaction.message.delete();
    }
}