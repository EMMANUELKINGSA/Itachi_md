const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '18682961912'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'bryantxtech@gmail.com'
global.github = 'https://github.com/Elsa2090/Itachi_md'
global.location = 'Dodoma Tanzania'
global.gurl = 'https://instagram.com/Bryant_tech.1/' // add your username
global.sudo = process.env.SUDO || "+233530729233"
global.devs = '+233530729233'
global.website = 'https://github.com/Elsa2090/Itachi_md' //wa.me/+233530729233
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/c2e8cd14fc0ef4811508a.mp4;https://telegra.ph/file/db71951d3a0750334e259.mp4'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUl2eTlXU3NwK3FUaGJrUFhpV00xaDVHMVIrMEgxbFRjZEluTUQvSytWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0xFNGxsNTJVeWZBOVJmaU16Uzk4SWx0TnlUWWsrVWFHaXRPWDlFWldTcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSmNhOVZCM2FrR0dDakFud1RRT0Y2cmUvTHJiK3dvNnBjY2lIMzBFMlZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqbm91TWRPWDgyRzBla0FRemlKYjFBVDNNWk13dlBXQ2hxT1NqSnBtZWdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHR2hUV1FmemlNbjFtZmV3eW1NYmRmNlZ1cXlxdWZQaUpTUGJtWTVaV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE0VzhvRXZvRGdtV2E5TEtIQnh3MXl6SEpzMTZuc2FYZ0t1bmUveHc3aEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZvL0I1NERiVWZlbUxoYUdPTnkvZkI0eHI3Zy9oRmY3eVNPOEJhcURFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFlKdjI4bWd3U1VUV0MvcVBlUnl5amZoQmZuN0dZcy9FR2NoMjdMSW1tND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink4WHNoMXg1eU5ibUxiTm1laHVwTmh1QmxVTkx5aklKcFkxdTNKblZtVzhpOUN6M2w4M0IxN0NGZEh0VEM2c2M4QWZ6Ymx5anZjZkF6S3lZaUljeGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6ImdGdjR0V3FXWWNpN2hyeWdYVTRHQnh3Zm1iQWtXYlFUVVlyanNvU095SE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTg2ODI5NjE5MTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzEwNDdDODlGNzQxQUQ5MDFDNkZCNkVGOUQ1MzJEMUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDMwMzc3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTg2ODI5NjE5MTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTE0ODY1NjI5OEEyNTY2MTJEQzY5MDU0ODJEODIwNzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDMwMzc3OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR0RCMjE1U2NSUGlDOVlHVjFFWjZkdyIsInBob25lSWQiOiI5MjU2NTkyMC00MTVjLTQ5YjAtOWJkMy01ZjdmZjU2YWVkYmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVZSOGZXWFN5U3ZhaGJmR05YUXF3YVZQejJRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFhcUdDKzk4dVpUN1YxTUpzVVppM2NPb0pZMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMQTRQTlJBWCIsIm1lIjp7ImlkIjoiMTg2ODI5NjE5MTI6NDlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Y+L4Y634Y634Y+X4Y+B4Y+s4Y+L4Y+dIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQcnBsdXdHRUpLQnA3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGYzJVTnlUdEE0L1pUZWZoQU52bGlDUzhXTFZyRUVYNkw0Q3U0bUhGV0IwPSIsImFjY291bnRTaWduYXR1cmUiOiJrb3pwbkZ6ajRVSFp6V3Jxa2Q3Q0JYVDl3RUZ6REV1SFdXQURXWmtQU09CbkNCdkFibnZYSUlXQllKR1hVZDhTeDQ1Qkd5ZmQ1a1Ftc3Y4NkdwbjZEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicVpFNUllTWE2WEg1dDFaeERZYTd6di9FNG1nTHZ5K0tMc0FtZWxhZXR5TFRacXR6aktTemgzWFNlK3JJY0QzRTYzWDBRRGI5aC9tWDh3ajU4bkZQaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODY4Mjk2MTkxMjo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSWE5sRGNrN1FPUDJVM240UURiNVlna3ZGaTFheEJGK2krQXJ1Smh4VmdkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzAzNzczLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZEZiJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'ITACHI MD',
  packname:  process.env.PACK_NAME || 'CREDIT TO BRYANT TECH',
  
  botname:   process.env.BOT_NAME === undefined ? "ITACHI-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Emmanuel' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? true : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗗 𝗕𝗬 𝗕𝗥𝗬𝗔𝗡𝗧 𝗧𝗘𝗖𝗛•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'ITACHI',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
