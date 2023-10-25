const { SlashCommandBuilder, hyperlink  } = require("@discordjs/builders");
const { MessageEmbed, IntegrationApplication } = require("discord.js");
const Config = require("../Configs/BotConfig.json")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("restart")
    .setDescription("Guard/Backup Botlarını yeniden başlatmaya yarar."),

  async execute(interaction, client) {
    if(!Config.BotOwner.includes(interaction.user.id)) {
        return interaction.reply({ content: "Bu komutu **Tac Sahibi ve <@1143638421257072661> Kullanabilir!**", ephemeral: true })
    }
    await interaction.reply({ content: `__**Bot**__ yeniden başlatılıyor!`, ephemeral: true })
    process.exit(0)
}
  };