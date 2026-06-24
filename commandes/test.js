"use strict";

const { zokou } = require("../framework/zokou");

zokou({
    nomCom: "test",
    categorie: "General",
    reaction: "🚀"
}, async (dest, zk, commandeOptions) => {
    const { ms, repondre } = commandeOptions;
    const channelJid = "120363407614939513@newsletter";
    const audioUrl = "https://files.catbox.moe/lqx6sp.mp3";
    
    // Media Links
    const imageUrl1 = "https://qu.ax/Xzc7x"; 
    const imageUrl2 = "https://qu.ax/Xzc7x"; 

    try {
        const testMsg = `*ONGITO-MD SYSTEM REPORT* ⚡\n\n` +
            `*Status:* 𝙾𝙽𝙻𝙸𝙽𝙴\n` +
            `*Engine:* Ongito 𝚅1\n` +
            `*Owner:* ONGITO-MD\n` +
            `*Timestamp:* ${new Date().toLocaleString()}\n\n` +
            `_System is running smoothly with media support._`;

        // 1. Send First Image with Caption
        await zk.sendMessage(dest, {
            image: { url: imageUrl1 },
            caption: testMsg,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: channelJid,
                    newsletterName: "ONGITO-MD",
                    serverMessageId: 1
                }
            }
        }, { quoted: ms });

        // 2. Send Second Image
        await zk.sendMessage(dest, {
            image: { url: imageUrl2 },
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: channelJid,
                    newsletterName: "ONGITO-MD"
                }
            }
        }, { quoted: ms });

        // 3. Send Audio (FIXED: Added the missing closing quote for mimetype)
        await zk.sendMessage(dest, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: channelJid,
                    newsletterName: "ONGITO-MD SONG"
                }
            }
        }, { quoted: ms });

    } catch (error) {
        console.error("Test Command Error:", error);
        repondre("❌ Error: " + error.message);
    }
});
