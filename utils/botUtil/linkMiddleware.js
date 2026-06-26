export default async (context, next) => {
    const { m, isBotAdmin } = context;

    if (!m.isGroup) {
        return m.reply(`╭━━━ᕙ    Ongito-Md    ᕗ━━━\n├━━━≫ Gʀᴏᴜᴘ Oɴʟʏ ≪───\n├ \n├ This command only works in groups!\n├ Private chat? For this? Pathetic.\n╰━━━━━━━━━━━━━━━━ᕗ\n`);
    }

    if (!isBotAdmin) {
        return m.reply(`╭━━━ᕙ    Ongito-Md    ᕗ━━━\n├━━━≫ Aᴅᴍɪɴ Rᴇϙᴜɪʀᴇᴅ ≪━━━\n├ \n├ I need admin rights to get the group link!\n├ Make me admin or watch me do nothing.\n╰━━━━━━━━━━━━━━━━ᕗ\n`);
    }

    await next();
};