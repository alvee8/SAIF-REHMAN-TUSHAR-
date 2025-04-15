module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐀𝐌𝐄  :    𝐒𝐀𝐈𝐅 𝐑𝐄𝐇𝐌𝐀𝐍 𝐓𝐔𝐒𝐇𝐀𝐑
𝐅𝐁 𝐋𝐈𝐍𝐊 :   https://www.facebook.com/share/1AJu6MC4G9/
𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 :  𝐈𝐒𝐋𝐀𝐌
𝐆𝐄𝐍𝐃𝐄𝐑   :  𝐌𝐀𝐋𝐄
𝐀𝐆𝐄       : 𝟏𝟗+
𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏 : 𝐌𝐀𝐑𝐑𝐈𝐄𝐃 𝐖𝐈𝐓𝐇 𝐒𝐀𝐃𝐈𝐘𝐀
𝐆𝐌𝐀𝐈𝐋       : 𝐒𝐀𝐈𝐅𝐑𝐄𝐇𝐌𝐀𝐍𝐓𝐔𝐒𝐇𝐀𝐑@𝐆𝐌𝐀𝐈𝐋.𝐂𝐎𝐌
𝐖𝐏 : wa.me/+𝟎𝟏𝟕𝟑𝟏𝟕𝟑𝟔𝟑𝟕𝟕
𝐓𝐆  : t.me/𝐄𝐑𝐑𝐈𝐑
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/share/1FHutqf2LA/`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.imgur.com/ByRNupl.mp4`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
