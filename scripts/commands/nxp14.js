const fs = require("fs");
module.exports = {
  config:{
	name: "🫠",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😤",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("😤")==0 || body.indexOf("🤬")==0 || body.indexOf("😠")==0 || body.indexOf("😡")==0) {
		var msg = {
				body: "রাগ দেখাস কারে 😒",
				attachment: fs.createReadStream(__dirname + `/Nayan/9245177172220403_100067540204855 (1).mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
