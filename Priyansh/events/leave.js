module.exports.config = {
        name: "leaveNoti",
        eventType: ["log:unsubscribe"],
        version: "1.0.0",
        credits: "HĐGN",//mod lại by Tòn
        description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
        dependencies: {
                "fs-extra": "",
                "path": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "leaveGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
        if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const { join } =  global.nodemodule["path"];
        const { threadID } = event;
  const moment = require("moment-timezone");
  const hours = moment.tz("Asia/Karachi").format("HH");
  const time = moment.tz("Asia/karachi").format("DD/MMM/YYYY || HH:mm:s");
        const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const iduser = event.logMessageData.leftParticipantFbId;
        const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
        const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐨𝐮𝐭" : "𝐛𝐢̣ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐬𝐮́𝐭 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦";
        const path = join(__dirname, "cache", "leaveGif");
        const gifPath = join(path, `${threadID}.gif`);
        var msg, formPush

        if (existsSync(path)) mkdirSync(path, { recursive: true });

        (typeof data.customLeave == "undefined") ? msg ="╭──𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 • 𝗦𝗵𝗼𝗻𝗮──♥︎╮\n  {name}\n   𝗧𝗵𝗶𝘀 𝗞𝗮𝗻𝗴𝗿𝗼 𝗙𝗹𝘆 𝗙𝗿𝗼𝗺 𝗛𝗲𝗿𝗲\n             🅡 🅘 🅟 🤣🤣🤣\n╰♥︎────────────────╯" : msg = data.customLeave;
        msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type)
  .replace(/\{iduser}/g, iduser).replace(/\{session}/g, hours <= 10 ? "Morning" : 
    hours > 10 && hours <= 12 ? "Afternoon" :
    hours > 12 && hours <= 18 ? "Night" : "Sleep")
  .replace(/\{time}/g, time);

        const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

        if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
        else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom) }
        }
        else formPush = { body: msg }

        return api.sendMessage(formPush, threadID);
}