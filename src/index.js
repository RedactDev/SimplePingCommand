const Redactcord = require("redactcord");
const Environment = new Redactcord.Environment();
const Client = new Redactcord.RedactClient({
    token: Environment.get("Token"),
    intents: [
        "Guilds",
        "MessageContent",
    ],
    restOptions: {
        enabled: true,
        global: true,
        guildId: undefined
    }
});

Client.onReadyEvent(() => {
    console.log("Client Ready!");
});

Client.login();