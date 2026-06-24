"use strict";

const { zokou } = require("../framework/zokou");

zokou({
    nomCom: "bugmenu",
    aliases: ["bug", "crashlist", "buglist"],
    categorie: "Bug-VIP",
    reaction: "☣️"
}, async (dest, zk, commandeOptions) => {
    const { ms, repondre, prefixe, superUser, auteurMessage } = commandeOptions;
    
    // Ulinzi: Ni Owner pekee anayeweza kuona hii menu
    if (!superUser) return repondre("❌ Restricted to Bot Owner only.");

    const channelJid = "120363407614939513@newsletter";
    const userName = auteurMessage.split('@')[0];

    try {
        let bugMsg = `
╭━━━━━━━━━━━━━━━
┃  ☣️ *ONGITO-MD BUGS* ☣️
╰━━━━━━━━━━━━━━━
   *CRUSH ANYONE*

👤 *USER:* @${userName}
⚙️ *MODE:* 𝙳𝙴𝙰𝚃𝙷-𝚂𝚀𝚄𝙰𝙳
📡 *SERVER:* 𝙾𝙽𝙻𝙸𝙽𝙴

*『 💣 𝚂𝙸𝙽𝙶𝙻𝙴 𝙰𝚃𝚃𝙰𝙲𝙺𝚂 』*
_Target: ${prefixe}command [number]_

• ☣️ \`${prefixe}crash\`
• 👾 \`${prefixe}bin\`
• ⚠️ \`${prefixe}ui-bug\`
• 🥶 \`${prefixe}total-freeze\`
• 💣 \`${prefixe}heavy-wa\`
• ⏳ \`${prefixe}lag\`
• 💀 \`${prefixe}dark-web\`
• 🌋 \`${prefixe}ram-kill\`
• ♨️ \`${prefixe}cpu-heat\`
• 👻 \`${prefixe}ghost-bug\`
• 📡 \`${prefixe}payload-x\`
• ☣️ \`${prefixe}kernel-error\`
• 🌀 \`${prefixe}infinite-lag\`
• 📂 \`${prefixe}internal-bug\`
• ⚰️ \`${prefixe}death-point\`

*『 ⚡ 𝚄𝙻𝚃𝙸𝙼𝙰𝚃𝙴 𝙲𝙾𝙼𝙱𝙾 』*
• 💀 \`${prefixe}mega-bug\`
_(Sends all 15 viruses at once)_

───────────────────
> *Warning:* These commands are for system resilience testing only. Use responsibly.
───────────────────
*Powered by Paul Ongito*`;

        await zk.sendMessage(dest, {
            text: bugMsg,
            mentions: [auteurMessage],
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: channelJid,
                    newsletterName: "BUGS MENU",
                    serverMessageId: 1
                },
                externalAdReply: {
                    title: "ONGITO-MD BUGS",
                    body: "System Vulnerability Terminal",
                    thumbnailUrl: "https://qu.ax/Xzc7x", 
                    sourceUrl: "https://chat.whatsapp.com/FlroF9tYqw281Hbq41I2CD",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: ms });

    } catch (error) {
        console.error("Bug Menu Error:", error);
        repondre(`❌ Error loading menu. Use ${prefixe}mega-bug directly.`);
    }
});
