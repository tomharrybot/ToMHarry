const axios = require("axios");
const fs = require("fs");
const ytdl = require('youtube-downloader-cc-api');
const ytSearch = require('yt-search'); // Import yt-search

module.exports.config = {
    name: "jordan",
    version: "1.0.0",
    hasPermission: 0,
    credits: "AMIR",
    description: "Play music or video from YouTube",
    usePrefix: true,
    commandCategory: "utility",
    usages: "[title]",
    cooldowns: 10,
    dependencies: {},
};

module.exports.run = async ({ api, event }) => {
    try {
        const input = event.body;
        const text = input.substring(7);
        const data = input.split(" ");

        if (data.length < 2) {
            return api.sendMessage("⚠️ Please put a title or name of the media (music or video).", event.threadID);
        }

        data.shift();
        const mediaType = data[0];
        data.shift();
        const mediaTitle = data.join(" ");

        api.sendMessage(`🔎 Searching for "${mediaTitle}"...`, event.threadID, event.messageID);

        // Use yt-search to search for videos
        const searchResults = await ytSearch(mediaTitle);

        if (!searchResults.videos.length) {
            return api.sendMessage("Error: No valid search results found.", event.threadID, event.messageID);
        }

        const media = searchResults.videos[0];
        const mediaId = media.videoId;

        let stream;
        let fileName;
        let filePath;

        if (mediaType.toLowerCase() === 'music') {
            stream = ytdl(mediaId, {
                quality: 'highestaudio',
            });
            fileName = `${media.title}.mp3`;
        } else if (mediaType.toLowerCase() === 'video') {
            stream = ytdl(mediaId, {
                filter: 'videoandaudio',
                quality: 'highest',
            });
            fileName = `${media.title}.mp4`;
        } else {
            return api.sendMessage("Error: Invalid media type. Use 'music' or 'video'.", event.threadID, event.messageID);
        }

        stream.pipe(fs.createWriteStream(__dirname + `/cache/${fileName}`));

        stream.on('end', () => {
            console.info('[DOWNLOADER] Downloaded');

            const message = {
                body: `🎵 Here's your media, enjoy! 🥰\n\nTitle: ${media.title}`,
                attachment: fs.createReadStream(__dirname + `/cache/${fileName}`),
            };

            api.sendMessage(message, event.threadID, () => {
                fs.unlinkSync(__dirname + `/cache/${fileName}`); // Remove the downloaded file after sending
            });
        });

        stream.on('error', (err) => {
            console.error('[ERROR]', err);
            api.sendMessage('An error occurred while processing the command.', event.threadID);
        });
    } catch (error) {
        console.error('[ERROR]', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
};