module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100015487808389","100015487808389","100015487808389") {
    var aid = ["100015487808389","100015487808389","100015487808389"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস, অনিক  সিংগেল পোলা তাকে একটা গফ দেও", "আমার বস অনিক কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "বস অনিক কে আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু অনিক কে মেনশন দিবা না😠", "অনিক ভাইয়া কে আরেক বার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "বস অনিক এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 🥰😍😏", " বস, অনিক কে ম্যানশন না দিয়ে একটা জিএফ দে 😇🥰", "Bot না জানু বল, অনিক জানু 😌"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
