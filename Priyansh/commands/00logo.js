var hiro = "ATF-TEAM";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logo",
  version: "1.0",
  hasPermssion: 0,
  credits: `${hiro}`, 
  description: "Logo",
  commandCategory: "Logo",
  usages: "logo 2 Ava",
  cooldowns: 2,
};
//CREDITS CHARDS FOR THE API :)
module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;
  if (args.length < 2) {
    return api.sendMessage(`❖•━━━━━━━━━━━━━━━━•❖\n☞ 𝗪𝗿𝗼𝗻𝗴 𝗨𝘀𝗲𝗱 ➺ 𝗘𝘅𝗮𝗺𝗣𝗹𝗲 ☜\n\n➥ ${global.config.PREFIX}𝗧𝗹𝗼𝗴𝗼 1 𝐀𝐌𝐈𝐑  ❥||ㅎ\n➥ ${global.config.PREFIX}𝗧𝗹𝗼𝗴𝗼 2 𝐀𝐌𝐈𝐑  ❥||ㅎ\n➥ ${global.config.PREFIX}𝗧𝗹𝗼𝗴𝗼 2 𝐀𝐌𝐈𝐑  ❥||ㅎ\n\n➥ 𝐓𝐨𝐓𝐚𝐥 𝐋𝐨𝐆𝐨𝐬 ❃ ➠ 》60《\n ❖•━━━━━━━━━━━━━━━━•❖`, threadID, messageID);
  }
  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/1?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
      break;
case "2":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/2?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "3":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/3?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "4":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/4?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "5":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/5?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "6":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/6?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "7":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/7?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "8":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/8?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "9":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/9?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "10":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/10?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "11":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/11?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "12":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/12?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "13":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/13?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "14":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/14?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "15":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/15?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "16":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/16?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "17":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/17?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "18":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/18?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "19":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/19?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "20":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/20?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "21":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/21?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "22":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/22?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "23":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/23?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "24":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/24?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "25":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/25?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "26":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/26?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "27":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/27?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "28":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/28?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "29":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/29?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "30":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/30?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "31":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/31?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "32":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/32?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "33":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/33?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "34":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/34?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "35":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/35?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "36":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/36?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "37":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/37?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "38":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/38?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "39":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/39?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "40":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/40?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "41":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/41?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "42":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/42?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "43":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/43?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "44":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/44?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "45":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/45?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "46":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/46?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "47":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/47?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "48":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/48?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "49":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/49?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "50":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/50?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "51":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/51?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "52":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/52?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "53":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/53?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "54":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/54?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "55":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/55?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "56":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/56?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "57":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/57?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "58":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/58?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "59":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/59?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
case "60":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/textpro/60?text=${name}`;
      message = " ≪══════◄••❀••►══════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━❪ ✦ 𝐀𝐌𝐈𝐑 ✦ ❫━━━━";
break;
    default:
      return api.sendMessage(`Invalid logo type!`, threadID, messageID);
  }

  api.sendMessage("⫷  𝐏𝐥𝐙𝐳 𝐖𝐀𝐈𝐓 ❺ 𝐒𝐂𝐍𝐃𝐒  ⫸", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};