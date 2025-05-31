const fs = require("fs-extra");
const axios = require("axios");

const apiKeys = [
  '1d38b94112mshfe8d29735f4a021p129bb7jsnf4b04a33cff1',
  '5f7caa0678mshab93857a2d6c468p1fdec6jsn0487f4fa0b5e',
  '268a47d07bmsh9a8adbfc3891882p17f393jsn841d036a2984',
  'fd818d8dc9msh4455008c967d00dp1b3d8cjsnaaa64606fffb',
  '28077613bemshd5a2d7ee4aea83ep17d768jsn7e4822c17d3c',
  '505643faa8msh79e5d96fd972e86p17158fjsne8cf07a99b1f',
  'a0d7261582msh1e46378a745f8bfp19e4cfjsn997ba49602c9',
  '261d337575msh5664685b3671b8ap1d294cjsn681c6ef11cb7',
  '70635f33a6msh5bf0b759a7011f4p1a3f35jsn43237c788352'
];

function getRandomKey() {
  return apiKeys[Math.floor(Math.random() * apiKeys.length)];
}

module.exports.config = {
  name: "autolink",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Modified by Danish (based on Thiệu Trung Kiên)",
  description: "Auto download image/video using valid API",
  commandCategory: "group",
  usages: "autodown",
  cooldowns: 5
};

module.exports.run = async function () {};

module.exports.handleEvent = async function ({ api, event }) {
  if (this.checkLink(event.body)) {
    const { type, url } = this.checkLink(event.body);
    this.downLoad(url, type, api, event);
  }
};

module.exports.downLoad = async function (url, type, api, event) {
  const time = Date.now();
  const ext = type;
  const path = __dirname + `/cache/${time}.${ext}`;

  try {
    const res = await this.getLink(url);
    if (!res || !res.medias || res.medias.length === 0) {
      return api.sendMessage("❌ Media not found or unsupported link.", event.threadID, event.messageID);
    }

    const mediaUrl = res.medias[0].url;

    const media = await axios.get(mediaUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(path, Buffer.from(media.data, "utf-8"));

    if (fs.statSync(path).size / 1024 / 1024 > 25)
      return api.sendMessage("⚠️ File too large to send (limit is 25MB).", event.threadID, () => fs.unlinkSync(path), event.messageID);

    api.sendMessage({ attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
  } catch (err) {
    console.log(err);
    api.sendMessage("❌ 𝐌𝐞𝐃𝐢𝐚 𝐍𝐨𝐓 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐏𝐥𝐞𝐚𝐒𝐞 𝐓𝐑𝐲 𝐀𝐠𝐚𝐢𝐧.", event.threadID, event.messageID);
  }
};

module.exports.getLink = async function (url) {
  let response;
  let attempts = 0;
  const triedKeys = new Set();

  while (attempts < apiKeys.length) {
    const apiKey = getRandomKey();
    if (triedKeys.has(apiKey)) continue;
    triedKeys.add(apiKey);

    const options = {
      method: 'POST',
      url: 'https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'social-download-all-in-one.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: { url }
    };

    try {
      response = await axios.request(options);
      if (response.data.medias) return response.data;
    } catch (err) {
      console.warn(`⚠️ API key failed: ${apiKey} - ${err.message}`);
    }

    attempts++;
  }

  throw new Error("All API keys failed.");
};

module.exports.checkLink = function (text) {
  const regex = /(?:https?|ftp):\/\/[^\s]+/g;
  const found = text.match(regex);
  const media = ['tiktok', 'facebook', 'douyin', 'youtube', 'youtu', 'twitter', 'instagram', 'kuaishou', 'fb'];

  if (found && this.isVaildUrl(String(found))) {
    const link = String(found);
    if (media.some(item => link.includes(item))) {
      return { type: "mp4", url: link };
    } else if (link.includes("soundcloud") || link.includes("zingmp3")) {
      return { type: "mp3", url: link };
    }
  }
  return false;
};

module.exports.isVaildUrl = function (url) {
  const regex = /^(http(s)?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-./?%&=]*)?$/i;
  return regex.test(url);
};