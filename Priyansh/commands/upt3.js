module.exports.config = {
	name: "uptime",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "JORDANOFFICIAL", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/karachi").format("【hh:mm:ss】");
var juswa2 = moment.tz("Asia/karachi").format("『D/MM/YYYY』");
var link = ["https://i.imgur.com/VLRAV5Z.jpeg"];
var callback = () => api.sendMessage({body:`╭────𝐔𝐩𝐓𝐢𝐌𝐞────♥︎╮\n ➳ 𝐑𝐔𝐍 ✦ ${hours}н ${minutes}м ${seconds}ѕ\n ➳ 𝐓𝐢𝐌𝐞 ✦ ${juswa}\n➳ 𝐃𝐚𝐓𝐞 ✦ ${juswa2}
╰♥︎─────────────╯\n\n ➥ 𝐁𝐨𝐓 𝐎𝐰𝐧𝐞𝐫 ➠: \n┏━━━━ 🖤 ━━━━┓
    ✦❥⋆⃝𝗔𝗠𝗜𝗥 ✦ 
┗━━━    🖤 ━━━━┛`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
