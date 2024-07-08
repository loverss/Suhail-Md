const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/df5GTwQ.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜfyan jan lahore 03036971399" 


global.devs = "923036971399" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923036971399";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923036971399,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_38_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjExLFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA1NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInlKcnk4UFZZaFYyeGF1WUZvSHBsS0NGZWM1UktyKy9wSzF2T0h2RHlldzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhZaUhVMm1CUV95bGNKMkdDblEtclFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGFjOGE2MGItMDkzNC00MDgyLWJhNzUtOWM2MWI3MmU0OTY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDEyNCxcbiAgICAgIDIxLFxuICAgICAgMzUsXG4gICAgICAxMjAsXG4gICAgICAyNDEsXG4gICAgICA0NyxcbiAgICAgIDIzMSxcbiAgICAgIDExOCxcbiAgICAgIDEzLFxuICAgICAgMjcsXG4gICAgICAxMTUsXG4gICAgICAyNDIsXG4gICAgICAyMTEsXG4gICAgICAyNDIsXG4gICAgICA3LFxuICAgICAgMjQxLFxuICAgICAgNTAsXG4gICAgICAxMTYsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDE5MixcbiAgICAgIDIxOCxcbiAgICAgIDEzMixcbiAgICAgIDc2LFxuICAgICAgMTM5LFxuICAgICAgMTg3LFxuICAgICAgMjE4LFxuICAgICAgMTYyLFxuICAgICAgMTQsXG4gICAgICAxMzEsXG4gICAgICAxMDEsXG4gICAgICAxMDMsXG4gICAgICAxNzAsXG4gICAgICA3NCxcbiAgICAgIDE0NCxcbiAgICAgIDExNCxcbiAgICAgIDE1NyxcbiAgICAgIDg1LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjJUQjFWTlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzNjk3MTM5OTo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNVRllBTiBKQU5cIixcbiAgICBcImxpZFwiOiBcIjg2NDAxODU3MTQ3MDU3OjUyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ003TzBZMEVFS2lscTdRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibkp2QXhMTnhBYzVZOFJVRjUxRHRGTVBJZXFZSEQ3MXE1Ri8vSjZwakxITT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMaVF6d2RGY0NRdGZ2clRnQVd3WHdxNEUwbk56T0NQR0cydXVmNkZjemIrU01MMDFpVVRuVXhvdVBOU1JrRUh5V0c4S3IwYk9VUDdOVEdMaE5pTjhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrbE00c281blBwT1pKZlVaOFRFem9NWjhaL0NHWm83ZGJ1MWdvZmdUNDV5Y3BaREVnUS9PNWtBVVdDOWgrbFlvbTlqODVPbUUrOUZ4c2t2d3pTNEhpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMzY5NzEzOTk6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNzM5MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCME5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIwTi5qc29uIjogIntcImtleURhdGFcIjpcIldIdTY5a1J3RGhrVGRVSWZ1dEg4bE41OGhNb0VmSitHaGdFSnh6Tk4rZmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwMjM0MTk2NCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜfyan Jan 03036971399 voice of pakistan 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜfyan Jan』*\n youtube.com/@sufyanjansufyanjan"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sufyan jan",
  ownername:process.env.OWNER_NAME|| "SUFYAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUFYAN ✅"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
