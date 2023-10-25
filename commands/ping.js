const { RedactCommand, CommandData, CommandFinishResult } = require("redactcord");
const { SlashCommandBuilder } = require("discord.js")

class PingCommand extends RedactCommand {

    constructor() {
        super(
            CommandData.createCommandData(
                new SlashCommandBuilder()
                    .setName("ping")
                    .setDescription("Pings the bot")
            )
        );
    }

    onInteractionExecute(interaction) {
        interaction.reply({
            content: "Pong!"
        });
        return new CommandFinishResult(true);
    }
}

module.exports = PingCommand;