//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0k0T0lxUU4zMmR6emhGWnRRNDM0NjVxaElma0ZqWmc0RFZpbVlPZ2RtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUk1bmVMcEVURGJpakVYRWd0K0lRWGVaaDlQMG56S3REVEtuZDF3SnYzMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQ1RHOGdlWXMwemdUa01jWHl5MVg5RFpYcGRydUp1RjZ3UDJPV29MNG5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRjgvRjZ6RjRnSGJMdDh3d04vNVhYNDRDdWxjZTRuanJSc0NxL3ZVeEh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1ERUxSanZPaEswZ2JhNGpWWHZMNlk5d2VyZEdYRDVCWGo3MXh5V2ZSVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZDQmZWbXdGYUhIUFV5b0owbnAwRmxtNk9EQmpYL0duV0hjQ2FRc0tsQnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VVTmxLQ2xjNENuVy91WDM3clZUaHUrUm00cll6eGdOSFVPSWFvOERYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFUxN1UvWkNJMEpPZkxIeDFpVlRnbGV5SEs1b2VRYTg3K0xqczluNzRTVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNuMW9xOTNRVmIyYXVjanJJNFlKa2NNMEJBYS9KeFR0UWphS3lFdzNjKzQwOVRXS1kvd0tRekVrS1JsOHhZY21zSm5JeWhkaWYzVDl1SjRNWHZBa2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6IlVlZ3JFcTk0ditqa1ZXdStCaXRpU3hpNDMzQSt6VXVQRW44SzVvVkl4VVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDMzNzc2MDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzdDMzcxRkE2MzY4OTQ3OEY5RTJDMDJFMzg3ODIyMkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjE4OTE1MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDMzNzc2MDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjNENDBFQThBNjBBMzIwRUY4QjdFMTA1Mjk0MDI2M0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjE4OTE1MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDMzNzc2MDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjA2RUIyMzgzQUQwQUFGRDlFMTJGQzY5QUQ5RjRBMzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjE4OTE1MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTVdQWTVITEEiLCJtZSI6eyJpZCI6Ijk0NzQzMzc3NjAwOjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRhaGFtIiwibGlkIjoiMjExMzE2OTIxNDI2MDg6MTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNalBwWklERU0ranRjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5dWc4MUp2ajlCcHVjQjhTMHpHZks0TWV1UDJBbUpXMy9MWDVNekRqRENFPSIsImFjY291bnRTaWduYXR1cmUiOiJHMVg2NEJjRjNwRFhBMVlvYUxCWnVNZ3Y3ekR2YTA1OGZIRVF5c1haa3c0ZHo3VVI5azQrRSt0eEk3bFZXd3VCSUR5WjdUNEUxSEpMYVN3d0RROTZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRkFmZTFTWi9HeW9pT2pKcEhNQVR4ay96Uysxd3BqSG5DeVZsakFDeFNEUVE3V0NvLzZsY1FDQ1o4eGxRM3NVRTlDSS9HZ0N3RmU3YUhkSXpNLzdoamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MzM3NzYwMDoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjcm9QTlNiNC9RYWJuQWZFdE14bnl1REhyajlnSmlWdC95MStUTXc0d3doIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxODkxNDgsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTljIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
