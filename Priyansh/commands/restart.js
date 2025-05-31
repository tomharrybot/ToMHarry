module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`╭────♥︎♡♥︎────╮\n  𝗦𝗵𝗼𝗻𝗮 𝗡𝗼𝘄 \n   𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴....\n𝗗𝗼𝗻𝘁 𝗙𝗹𝗶𝗿𝘁 😉\n╰💜────♡───💜╯`, threadID, () => process.exit(1));
}