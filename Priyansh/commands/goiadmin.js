module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "John Arida",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000856538718") {
    var aid = ["100000856538718"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Don't tag admin, he's busy 😗", "Admin is currently unavailable 🤧", "Sorry, admin is offline 😪","Do you like my admin thats why your tagging him? 😏"," My Admin is asleep, don't tag him, wake him up and reply 🥱", "Don’t tag my owner, he's dreaming big while asleep 😴", "He’s enjoying a peaceful meal, no tags for now.", "My owner’s in serious talk mode — tagging not allowed 😡", "My owner’s on duty — let’s not break his focus."];
      api.setMessageReaction("😍", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}